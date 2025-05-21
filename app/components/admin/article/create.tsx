import { useState } from "react"
import { Form, useSubmit } from "react-router";
import Logo from "~/components/icons/logo";

export const Article = ({ children }: { children: React.ReactNode} ) => <>
    <div className="p-2 rounded-t-sm bg-black/5 text-black/50 w-full text-xs sm:text-sm md:text-lg flex flex-row items-center">
        <p>
            { location.origin }/articles/
        </p>
        <input type="text" name="identifiant" id="identifiant-article"
            placeholder="identifiant-de-l-article"
            pattern="^[a-z]+(-[a-z]+)*$"
            required
            className="outline-none w-full" />
    </div>
    <article className="p-3 w-full h-fit bg-white/60 shadow-2xl
        flex flex-col justify-between relative rounded-b-sm">
        <div className="flex flex-col p-2">
            <input type="text" name="titre" id="titre" 
                placeholder="Titre de l'article" required
                className="outline-none font-semibold text-lg lg:text-2xl py-2"/>
            <textarea name="description" id="description" 
                placeholder="description de l'article"
                required
                className="outline-none text-xs lg:text-base h-24 resize-y max-h-32"/>
        </div>
        <div className="flex flex-row flex-wrap gap-2 select-none text-xs md:text-sm">
            {
                // les boutons
                children
            }
        </div>
    </article>
</>

export default () => {
    // 0 fermé, 1 ouvert, 2 chargement
    const [ouvert, setOuvert] = useState(0)
    const submit = useSubmit()
    return <article onClick={() => {
        if(ouvert == 0) setOuvert(1);
    }}
        className="p-3 w-full h-full max-h-48 text-xl font-semibold transition-colors cursor-pointer
        flex flex-col justify-center items-center bg-black/5 hover:bg-black/15 rounded-sm">
        Créer un article 📰
        {
            ouvert >= 1 && <dialog open className="absolute top-0 left-0 h-screen w-screen bg-white/50 backdrop-blur-sm
                flex flex-col gap-3 justify-center items-center text-lg cursor-default font-normal" onClick={(event) => {
                    const target = event.target as HTMLElement | null;
                    // Si on clique à côté du formulaire, le dialog se ferme
                    if(target?.tagName === "DIALOG" && ouvert !== 2) setOuvert(0);
                }}>
                {
                    ouvert === 1 
                    ? <Form method="POST" className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-fit">
                        <Article>
                            <button className="px-2 py-1 cursor-pointer outline-none
                                bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-sm" type="submit" onClick={async event => {
                                    event.preventDefault()
                                    const form = document.querySelector('form') as HTMLFormElement | null
                                    if(!form) return
                                    setOuvert(2)
                                    await submit(form)
                                    setOuvert(0)
                                }}>
                                Créer l'article
                            </button>
                            <button className="px-2 py-1 cursor-pointer outline-none
                                bg-orange-600 hover:bg-orange-500 transition-colors text-white rounded-sm" type="submit"
                                onClick={async event => {
                                    event.preventDefault()
                                    const form = document.querySelector('form') as HTMLFormElement | null
                                    if(!form) return
                                    
                                    const ia = document.createElement('input')
                                    ia.name = "ia"
                                    ia.id = "ia"
                                    ia.value = "true"
                                    ia.style.display = 'none'
                                    form.appendChild(ia)
                                    setOuvert(2)
                                    await submit(form)
                                    setOuvert(0)
                                }}>
                                Générer l'article
                            </button>
                            <div onClick={() => setOuvert(0)}
                                className="px-2 py-1 cursor-pointer
                                hover:bg-black/10 transition-colors text-black rounded-sm">
                                Annuler
                            </div>
                        </Article>
                    </Form>
                    : <div className="h-full w-full flex items-center justify-center">
                        <Logo className="animate-spin w-8 h-8"/>
                    </div>
                }
                
            </dialog>
        }
    </article>
}