import Lien from "~/components/Lien"
import { type ArticleData, listArticles, updateArticle } from "~/lib/articles";
import { Route } from "./+types/article";
import { redirect, useSubmit } from "react-router";
import Meta from "~/components/admin/article/meta";
import { useEffect, useState } from "react";
import { traitementRequete } from "./action";

export async function action({ request, params }: Route.ActionArgs) {
    const donnees = await traitementRequete(request)

    const previousId = params.article
    if(donnees.type !== "update") {
        return false;
    }

    console.log('updating article', previousId)
    updateArticle(previousId, {
        id: donnees.id,
        titre: donnees.titre,
        description: donnees.description,
        contenu: donnees.contenu
    })
    if(donnees.id && donnees.id !== previousId) {
        throw redirect('/admin/' + donnees.id)
    }
}

export async function loader({ params }: Route.LoaderArgs): Promise<ArticleData> {
    const article = listArticles().find(article => article.id == params.article)

    if(!article) {
        throw redirect('/admin');
    }
    return article;
}

export default ({ loaderData }: Route.ComponentProps) => {
    const submit = useSubmit()
    const [article, setArticle] = useState<ArticleData>()
    useEffect(() => {
        setArticle(loaderData)
    }, [loaderData])

    if(!article) return <>
        loading...
    </>

    return <div className="h-screen w-screen flex flex-col">
        <div className="w-screen py-2 sm:py-4 relative border-b border-black/25">
            <Lien to="/admin" className="sm:absolute top-0 left-0 p-2 sm:p-4 hover:text-blue-400 transition-colors">
                Revenir aux articles
            </Lien>
            <p className="text-lg font-semibold text-center">
                {
                    article.titre
                }
            </p>
        </div>
        <section className="h-full w-full flex flex-col md:grid md:grid-cols-5">
            <div className="w-full h-full overflow-y-scroll col-span-3 flex flex-col">
                <h3 className="p-4 text-xl font-semibold">
                        Metadonnées
                </h3>
                <Meta article={article} update={(updatedArticle) => {
                    setArticle(prevArticle => ({
                        ...prevArticle!,
                        ...updatedArticle
                    }))
                }} />
                <h3 className="p-4 text-xl font-semibold border-t border-black/10">
                        Page
                </h3>
                <textarea defaultValue={article.contenu} 
                    className="resize-none w-full h-full outline-none overflow-y-scroll 
                        p-4 border-t border-black/10"
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        setArticle(prevArticle => ({
                            ...(prevArticle || article),
                            contenu: target.value
                        }))
                    }}
                    onKeyDown={(e) => {
                        if(e.key === 'Tab') {
                            // implementation de l'indentation
                            const target = e.target as HTMLTextAreaElement
                            const { value: texte, selectionStart: start, selectionEnd: end } = target;

                            target.value = texte.substring(0, start) + '\t' + texte.substring(end);
                            target.selectionStart = target.selectionEnd = end + 1;

                            // on ne fait pas l'action du tab par défaut 
                            // (selectionner l'élément suivant)
                            e.preventDefault()
                        }
                    }}/>
                <div className="grid grid-cols-2 *:border *:border-black/10">
                    <div className="p-4 text-center cursor-pointer 
                        hover:bg-blue-500 hover:text-white transition-colors"
                        onClick={async () => {
                            const form = new FormData();
                            form.set('update', 'ahhhh');

                            if(loaderData.id !== article.id) 
                                form.set('identifiant', article.id)
                            if(loaderData.titre !== article.titre) 
                                form.set('titre', article.titre)
                            if(loaderData.description !== article.description) 
                                form.set('description', article.description)
                            if(loaderData.contenu !== article.contenu) 
                                form.set('contenu', article.contenu)

                            await submit(form, { method: 'POST' })
                            
                        }}>
                        Sauvegarder
                    </div>
                    <div className="p-4 text-center border-l-0
                        cursor-pointer transition-colors hover:bg-black/10"
                        onClick={() => window.location.reload()}>
                        Annuler
                    </div>
                </div>
            </div>
            <div className="col-span-2 border p-4 border-blue-500
                md:border-0 md:border-l md:border-black/25" 
                dangerouslySetInnerHTML={{__html: article.contenu}}/>
        </section>
    </div>
}