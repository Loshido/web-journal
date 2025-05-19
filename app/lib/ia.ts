// On utilise l'API de Cloudflare (Gratuit)
// En phase de test je touche 9 Neurones sur 10K/jour

// Pour mettre les variables d'environnement
// il faut mettre dans le fichier .env à la racine du projet : 
/* 
ACCOUNT_ID=xxxxxx
AI_TOKEN=xxxxxx
*/

// https://dash.cloudflare.com/
const ACCOUNT_ID = process.env.ACCOUNT_ID 
// https://dash.cloudflare.com/profile/api-tokens
// Générez une clé avec les permissions sur la section IA
const AI_TOKEN = process.env.AI_TOKEN 
const MODEL = "@cf/google/gemma-2b-it-lora"

if(!ACCOUNT_ID || !AI_TOKEN) throw new Error("Les variables d'environments "
    + "ACCOUNT_ID et AI_TOKEN sont nécessaires pour utiliser l'IA!")

type Article = {
    titre: string,
    description: string,
}

// https://developers.cloudflare.com/workers-ai/models/gemma-2b-it-lora/#Output
interface AI_Response { //
    result: {
        response: string,
        usage: {
            prompt_tokens: number,
            completion_tokens: number,
            total_tokens: number
        }
    },
    success: boolean,
    errors: unknown[],
    messages: unknown[]
}

const PROMPT = `
Tu es un générateur d’articles en HTML.
Tu recevras un titre et une description d’article.
Tu dois générer uniquement du HTML, sans inclure les balises <html>, <body> ou <script>.
Si tu inclues une balise <style>, tous les sélecteurs CSS doivent commencer par .article.

- Structure ton contenu comme un vrai article web : avec des titres (<h1>, <h2>, etc.), paragraphes (<p>), listes, images (<img> avec des alt génériques) si pertinent, etc.
- Le contenu doit être lisible et cohérent avec le titre et la description.
- Aucune explication, seulement le HTML généré.

Voici les données d’entrée :

Titre : $1
Description : $2
`

export default async (article: Article): Promise<string> => {
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${ ACCOUNT_ID }/ai/run/` 
            + MODEL,
        {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${ AI_TOKEN }`
            },
            body: JSON.stringify({
                prompt: PROMPT
                    .replace('$1', article.titre)
                    .replace('$2', article.description)
            })
        }
    )

    const body: AI_Response = await response.json()
    if(!body.success) {
        console.error("L'ia a échoué...")
        console.error(body.errors)
        return "Raté"
    }
    return body.result.response
}