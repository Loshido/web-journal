import fs from "fs";

// dans /public, les fichiers sont accessibles à /
// donc /public/images/a.gif sera accessible à /images/a.gif
const IMAGE_BUCKET = `./public/images/`
export interface Image {
    nom: string,
    url: string
}

export function lister_images(): Image[] {
    // On lit le nom des fichiers dans le répertoire
    const images = fs.readdirSync(IMAGE_BUCKET, {
        encoding: 'utf-8' // permet de retourner string[]
    })

    return images.map(image => ({
        nom: image,
        url: `/images/${image}`
    }))
}

export async function importer_image(nom: string, image: File): Promise<boolean> {
    try {
        // writeFileSync demande le fichier sous forme de string ou de "ArrayBuffer"
        // or il s'agit d'une image (donc pas de string)
        const buffer = await image.bytes();
        fs.writeFileSync(IMAGE_BUCKET + nom, buffer);
        return true
    } catch (err) {
        console.error(`[images]`, err)
        return false
    }
}

export function supprimer_image(nom: string): boolean {
    try {
        fs.rmSync(IMAGE_BUCKET + nom)
        return true
    } catch(err) {
        console.error('[images]', err)
        return false
    }
}