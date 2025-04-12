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
    date: number
}

export const listArticles = (): ArticleData[] => {
    const file = readFileSync(ARTICLES_PATH, { encoding: 'utf-8' });
    const articles = JSON.parse(file)
    if(typeof articles === 'object' && articles instanceof Array) {
        return articles as ArticleData[];
    }

    throw new Error(`Le format de "${ARTICLES_PATH}" corresponds pas à un fichier JSON.`)
}

export const createArticle = (article: ArticleData): void => {
    const articles = listArticles();
    articles.push(article);

    writeFileSync(ARTICLES_PATH, JSON.stringify(articles));
}

export const updateArticle = (id: string, article: Partial<ArticleData>) => {
    const articles = listArticles();

    for(let i = 0; i < articles.length; i++) {
        if(articles[i].id === id) {
            Object.entries(article).forEach(([key, value]) => {
                // @ts-ignore
                articles[i][key] = value
            })
            break;
        }
    }
    
    writeFileSync(ARTICLES_PATH, JSON.stringify(articles));
}

export const deleteArticle = (id: string) => {
    const articles = listArticles();
    
    const i = articles.findIndex(article => article.id === id);
    if(i < 0) return;
    
    articles.splice(i, 1);
    
    writeFileSync(ARTICLES_PATH, JSON.stringify(articles));
}