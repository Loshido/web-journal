import { useState } from "react";
import { createArticle, deleteArticle, listArticles, type ArticleData } from "~/lib/articles";
import Article from "~/components/admin/article";
import CreationArticle from "~/components/admin/article/create";
import Suppression from "~/components/admin/article/delete";
import { Route } from "./+types";
import { useSubmit } from "react-router";
import { traitementRequete } from "../action";
import ia from "~/lib/ia";

export async function action({ request }: Route.ActionArgs) {
    const donnees = await traitementRequete(request)
    
    if(donnees.type === 'create') {
        let contenu = '<p>Hello, World!</p>'
        if(donnees.ia) {
            contenu = await ia({
                titre: donnees.titre,
                description: donnees.description
            })
        }

        const article: ArticleData = {
            id: donnees.id,
            titre: donnees.titre,
            description: donnees.description,
            contenu,
            reaction: {
                likes: 0,
                dislikes: 0
            },
            date: Date.now()
        }
        createArticle(article);
    } else if(donnees.type === 'delete') {
        deleteArticle(donnees.id);
    }
    return true;
}

export async function loader(): Promise<ArticleData[]> {
    const articles = listArticles()
    return articles;
}

export default function Page({ loaderData: articles }: Route.ComponentProps) {
    const [id, setId] = useState<null | string>(null);
    const submit = useSubmit();

    const supprimer = (id: string) => {
        setId(id)
    }

    return <>
        <section className="w-full h-full p-4">
            <div className="w-full h-full gap-3 overflow-y-scroll
                flex flex-row flex-wrap content-start">
                {
                    articles != undefined && articles.map((article, i) => <Article 
                        key={i} article={article} 
                        supprimer={supprimer}/>)
                }
                <CreationArticle/>
            </div>
        </section>
        <Suppression
            id={id}
            annuler={() => setId(null)}
            // Submit to the action handler (on the server)
            supprimer={async () => {
                if(!id) return;
                const form = new FormData();
                form.set('identifiant', id)
                
                setId(null)
                await submit(form, {
                    method: 'POST'
                })
            }}/>
    </>
}