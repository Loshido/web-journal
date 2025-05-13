import Header from "~/components/header"
import Footer from "~/components/footer"

import { type ArticleData, listArticles } from "~/lib/articles";
import { Route } from "./+types";
import Lien from "~/components/Lien";

export async function loader(): Promise<ArticleData[]> {
    const articles = listArticles()
    articles.sort((a, b) => b.reaction.likes - a.reaction.likes); //C'est ici que l'on trie la listArticles par le nombres de likes pour ensuite pouvoir les afficher
    return articles.slice(0, 3);
}

export default function Page({ loaderData: articles }: Route.ComponentProps) {

    return <div>
        <Header/>
        <div className="mb-10 mt-10 flex flex-col items-center justify-center">
            <div className="h-20 w-full flex items-center justify-center text-center text-xl p-5 mb-10
            md:text-3xl">Le site où chaque article éclaire, questionne et inspire.</div>
            <div className="bg-gray-100 rounded-2xl w-screen h-screen p-5 flex items-center justify-center
             md:w-8xl md:h-100">
                <div className="w-screen h-full rounded-2xl grid grid-cols-1 gap-3 grid-rows-2
                 md:grid-cols-5 md:w-6xl md:grid-rows-1">
                    <div className=" col-span-3 rounded-2xl row-span-1">
                        <div className="w-full h-full rounded-2xl p-10 grid grid-rows-2
                        md:grid-rows-4">
                            <div className="text-xl row-span-2 flex items-center pl-1
                            sm:pl-5 sm:text-2xl md:text-4xl">
                                {articles[0].titre}
                            </div>
                            <div className="row-span-2 p-2
                            sm:p-5 md:text-xl">
                                {articles[0].description}
                            </div>
                        </div>
                    </div>
                    <Lien to="/" className="bg-amber-300 col-span-2 rounded-2xl grid grid-rows-4 row-span-1">
                        <div className="row-span-3"></div>
                    </Lien>
                </div>
            </div>
            <div className="w-full h-screen p-5 flex items-center justify-center
            md:h-100">
                <div className="w-screen h-full rounded-2xl grid grid-cols-2 gap-3
                 md:w-6xl md:grid-cols-5">
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-3
                    md:col-span-2 md:grid-rows-4">
                        <Lien to="/" className="row-span-2 md:row-span-3"></Lien>
                        <div className="bg-gray-300 rounded-b-2xl p-3 flex items-center justify-center row-span-1
                        sm:text-xl">
                            <div className="flex items-center">
                                {articles[1].titre}
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-3
                    md:col-span-2 md:grid-rows-4">
                        <Lien to="/" className="row-span-2 md:row-span-3"></Lien>
                        <div className="bg-gray-300 rounded-b-2xl p-4 flex items-center justify-center row-span-1
                        sm:text-xl">
                            <div className="flex items-center">
                                {articles[2].titre}
                            </div>
                        </div>
                    </div>
                    <Lien to="/" className="bg-red-200 col-span-2 rounded-2xl flex flex-col justify-center items-center gap-5
                     md:col-span-1">
                        <div className="text-xl">---&gt;</div>
                        <div className="text-xl">Voir plus d'articles</div>
                    </Lien>
                </div>
            </div>
        {/* <div className="mb-10 mt-10 w-svw h-auto text-7xl">
            <div id="ligne-scroll" className="flex flex-wrap break-all">DES ARTICLES LIMPIDES. C'EST VERT C'EST CLAIR. LES ARTICLES DU FUTUR. AHA</div>
        </div> */}
        <div className="bg-gray-100 mt-10 mb-10 w-svw h-svh flex flex-col">
            <div className="w-svw h-full grid grid-col-1 grid-rows-3  p-5 gap-4
            md:grid-cols-11 md:grid-rows-10">
                <div className="flex items-center justify-center row-start-1 text-xl text-center sm:text-4xl
                md:col-start-7 md:row-start-3 md:col-span-5 md:text-3xl">Comment sont faits nos articles ?</div>
                <div className="bg-gray-200 flex flex-col gap-5 items-center justify-center row-start-2 rounded-2xl p-2
                md:col-start-2 md:row-start-2 md:col-span-5 md:row-span-4 md:rounded-full">
                    <div className="text-xl md:text-3xl">HUMAIN</div>
                    <div className="w-full flex items-center justify-center text-center
                    md:text-xl md:w-120">La grande majorité des articles que vous trouverez ici sont écrits par des personnes passionnées, qui mettent leur cœur et leur savoir dans chaque mot.</div>
                </div>
                <div className="bg-gray-200 flex flex-col gap-5 items-center justify-center row-start-3 rounded-2xl p-2
                 md:col-start-6 md:row-start-6 md:col-span-5 md:row-span-4 md:rounded-full">
                    <div className="text-xl md:text-3xl">CHATGPT</div>
                    <div className="w-full flex items-center justify-center text-center
                     md:text-xl md:w-120">Certains articles sont également rédigés avec l’aide de ChatGPT : il suffit que l'administrateur clique sur un bouton et de donner une idée ou un axe, et l’article prend forme en quelques instants.</div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>


    {/* <div>
        <img className="m-4" src="/routes.png"/>
    </div> */}
    </div>}
