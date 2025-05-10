import Header from "~/components/header"
import Footer from "~/components/footer"
import { type ArticleData, listArticles } from "~/lib/articles";
import { Route } from "./+types";

import { type ArticleData, listArticles } from "~/lib/articles";
import { Route } from "./+types";

export async function loader(): Promise<ArticleData[]> {
    const articles = listArticles()
    articles.sort((a, b) => b.reaction.likes - a.reaction.likes); //C'est ici que l'on trie la listArticles par le nombres de likes pour ensuite pouvoir les afficher
    return articles.slice(0, 3);
}

export default function Page({ loaderData: articles }: Route.ComponentProps) {

    return <div>
        <Header/>
        <div className="flex flex-col items-center justify-center w-screen mb-10 mt-10">
            <div className="bg-gray-100 rounded-2xl w-8xl h-100 p-5 flex items-center justify-center">
                <div className="w-6xl h-full rounded-2xl grid grid-cols-5 gap-3">
                    <div className="bg-gray-100 col-span-3 rounded-2xl">
                        <div className="w-full h-full rounded-2xl grid grid-rows-4 p-10">
                            <div className="text-4xl row-span-2 flex items-center pl-5">{articles[0].titre}</div>
                            <div className="row-span-2 text-xl p-5">{articles[0].description}</div>
                        </div>
                    </div>
                    <div className="bg-amber-300 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-100 p-5 flex items-center justify-center">
                <div className="w-6xl h-full rounded-2xl grid grid-cols-5 gap-3">
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl p-3 flex items-center justify-center">
                            <div className="flex items-center">{articles[1].titre}</div>
                        </div>
                    </div>
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl p-4 flex items-center justify-center">
                            <div className="flex items-center">{articles[2].titre}</div>
                        </div>
                    </div>
                    <div className="bg-red-200 col-span-1 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center justify-center">Voir plus d'articles</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    {/* <div>
        <img className="m-4" src="/routes.png"/>
    </div> */}
    </div>
}