import { Form, useSubmit } from "react-router";
import { Route } from "./+types";
import { type Image, lister_images, importer_image, supprimer_image } from '~/lib/images'
import Thumbnail from "~/components/admin/images/Thumbnail";

// *ne fonctionne pas sur safari en http
export async function action({ request }: Route.ActionArgs) {
    const form = await request.formData()
    
    // Suppression
    const suppression = form.get('supprimer')
    if(suppression) {
        return supprimer_image(suppression.toString())
    }

    // Importation
    const image = form.get('image')
    if(!(image instanceof File)) {
        return "Vous n'avez pas envoyé d'image."
    }
    await importer_image(image.name, image)
}

export async function loader(): Promise<Image[]> {
    return lister_images()
}

export default ({ loaderData: images }: Route.ComponentProps) => {
    const submit = useSubmit()
    return <div className="w-screen h-full pb-4 md:pb-0 p-4 gap-3 gap-y-3 overflow-y-scroll
            flex flex-col sm:flex-row sm:flex-wrap content-start">
        {/* On affiche les images, 
            et on permet de copier leur URL ou de les supprimer */}
        {
            images.map(image => <Thumbnail
                key={image.nom}
                url={image.url}
                nom={image.nom}
                actions={[
                    {
                        titre: 'Copier le lien',
                        async click() {
                            const origin = window.location.origin
                            await navigator.clipboard.writeText(origin + image.url);
                        }
                    },
                    {
                        titre: 'Supprimer',
                        async click() {
                            const form = new FormData();
                            form.set('supprimer', image.nom)
                            form.forEach(console.log)
                            await submit(form, {
                                method: 'POST',
                                encType: 'multipart/form-data'
                            })
                        }
                    }
                ]}/>)
        }

        {/* On permet à l'utilisateur d'importer une image */}
        <Form method="post" encType="multipart/form-data">
            {/* Lorsqu'il cliquer sur le label, l'input est sélectionné */}
            <label className="relative h-48 border border-black/25 p-4
            flex flex-col gap-0 items-center justify-center text-center">
                <p>Cliquer pour séléctionner une image</p>
                {/* On cache l'input, pour mettre notre propre interface */}
                <input type="file" name="image" id="image" 
                    accept="image/*" required className="opacity-0"
                    onInput={() => {
                        const input = document.getElementById('image') as HTMLInputElement | null
                        const preview = document.getElementById('image-preview') as HTMLImageElement | null
                        if(!input || !input.files || input.files.length == 0 || !preview) return

                        // On affiche l'image séléctionnée dans l'img ci-dessous.
                        preview.src = URL.createObjectURL(input.files[0])
                    }} />
                <button type="submit" 
                    className="bg-white px-2 py-1 text-black hover:bg-white/75 
                    transition-colors cursor-pointer select-none">
                    Envoyer
                </button>
                <img alt="" id="image-preview" 
                    className="absolute top-0 left-0 -z-10 w-full h-full opacity-50 object-contain" />
            </label>
        </Form>
    </div>
}