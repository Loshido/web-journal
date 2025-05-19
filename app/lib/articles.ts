import { readFileSync, writeFileSync } from "fs"
const ARTICLES_PATH = './data/articles.json';

export interface ArticleData {
    id: string,
    titre: string,
    description: string,
    contenu: string,
    reaction: {
        likes: number,
        dislikes: number,
    },
    image?: string,
    date: number
}

export const listArticles = (): ArticleData[] => {
    const file = readFileSync(ARTICLES_PATH, { encoding: 'utf-8' });

    // On passe les articles de chaine de caractères (JSON) en object javascript
    const articles = JSON.parse(file)
    if(typeof articles === 'object' && articles instanceof Array) {
        return articles as ArticleData[];
    }

    throw new Error(`Le format de "${ARTICLES_PATH}" corresponds pas à un fichier JSON.`)
}

export const createArticle = (article: ArticleData): void => {
    const articles = listArticles();
    articles.push(article);

    // JSON.stringify passe les articles en chaine de caractère?
    writeFileSync(ARTICLES_PATH, JSON.stringify(articles, undefined, 4));
}

export const updateArticle = (id: string, article: Partial<ArticleData>) => {
    const articles = listArticles();

    for(let i = 0; i < articles.length; i++) {
        if(articles[i].id === id) {
            // Partial<T> rends tous les champs de l'objet optionnels,
            // on passe sur toutes les propriétés à modifier de l'article.

            // Object.entries({ clé: valeur, clé2: valeur2 }) -> [[clé, valeur], [clé2, valeur2]]
            Object.entries(article).forEach(([key, value]) => {
                if(value === undefined) return;

                // @ts-ignore (cette approche n'est pas typesafety)
                articles[i][key] = value
            })
            break;
        }
    }
    
    writeFileSync(ARTICLES_PATH, JSON.stringify(articles, undefined, 4));
}

export const deleteArticle = (id: string) => {
    const articles = listArticles();
    
    // .findIndex renvoie -1 lorsqu'il ne trouve pas l'article
    const i = articles.findIndex(article => article.id === id);
    if(i < 0) return;
    
    // splice fait une mutation sur articles.
    articles.splice(i, 1);
    
    writeFileSync(ARTICLES_PATH, JSON.stringify(articles, undefined, 4));
}