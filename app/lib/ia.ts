import { readFileSync } from "fs"

const MODEL = "@hf/thebloke/deepseek-coder-6.7b-instruct-awq"
const ENDPOINT = "https://api.cloudflare.com/client/v4/accounts/$1/ai/run/$2"
const ENV_PATH = "./.env"
const PROMPT = `<style></style><article></article`
 + `, écrit un article en HTML dans le modèle donné, change uniquement le style de cet article. $1`

const readEnvFile = (): Record<string, string> => {
    const file = readFileSync(ENV_PATH, { encoding: 'utf-8' });

    const env: Record<string, string> = { };
    const variables = file.split('\n');
    variables.forEach(ligne => {
        const [variable, valeur] = ligne.split('=');
        env[variable] = valeur
    })

    return env;
}

export async function generate(context: string): Promise<string> {
    const env = readEnvFile()
    if(!('CF_IA_TOKEN' in env)) return "Variable CF_IA_TOKEN introuvable";
    if(!('CF_IA_ID' in env)) return "Variable CF_IA_ID introuvable";

    const CF_IA_TOKEN = env.CF_IA_TOKEN;
    const CF_IA_ID = env.CF_IA_ID;

    const response = await fetch(ENDPOINT
        .replace('$1', CF_IA_ID)
        .replace('$2', MODEL), {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${CF_IA_TOKEN}`
        },
        body: JSON.stringify({
            prompt: PROMPT.replace('$1', context)
        })
    })

    const body = await response.json();

    return body.result.response as string;
}