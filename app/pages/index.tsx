import Header from "~/components/header"
import Footer from "~/components/footer"
import { type ArticleData, listArticles } from "~/lib/articles";
import { Route } from "./+types";
import Lien from "~/components/Lien";
import Triangle from "~/components/icons/triangle";

export async function loader(): Promise<ArticleData[]> {
    const articles = listArticles()

    // C'est ici que l'on trie les articles par 
    // le nombres de likes pour ensuite pouvoir les afficher
    articles.sort((a, b) => b.reaction.likes - a.reaction.likes); 

    // On récupère les 3 premiers articles
    return articles.slice(0, 3);
}

export default function Page({ loaderData: articles }: Route.ComponentProps) {

    return <div>
        <Header/>
        <div className="mb-10 mt-10 flex flex-col items-center justify-center">
            <div className="h-20 w-full flex items-center justify-center text-center font-semibold text-xl p-5 mb-10
            md:text-3xl">Le site où chaque article éclaire, questionne et inspire.</div>
            <div className="bg-gray-100 rounded-2xl w-screen h-screen p-5 flex items-center justify-center
             md:w-8xl md:h-100">
                <div className="w-screen h-full rounded-2xl grid grid-cols-1 gap-3 grid-rows-2
                 md:grid-cols-5 md:w-6xl md:grid-rows-1">
                    <div className=" col-span-3 rounded-2xl row-span-1">
                        <div className="w-full h-full rounded-2xl p-10 gap-7 grid grid-rows-2
                        md:grid-rows-5 md:gap-1">
                            <div className="text-xl row-span-2 flex justify-center items-center pl-1
                            sm:pl-5 sm:text-2xl md:text-4xl">
                                {articles[0].titre}
                            </div>
                            <div className="row-span-2 p-2
                            sm:p-5 md:text-xl">
                                {articles[0].description}
                            </div>
                            <div className="flex justify-end text-center items-center text-sm">
                                Article le plus liké avec : {articles[0].reaction.likes} likes.
                            </div>
                        </div>
                    </div>
                    <Lien to={`/articles/` + articles[0].id} className="bg-gray-200 col-span-2 rounded-2xl grid grid-rows-4 row-span-1">
                        <div className="row-span-4">
                            <img className="rounded-t-2xl w-full h-full object-cover" src={articles[0].image}/>
                        </div>
                    </Lien>
                </div>
            </div>
            <div className="w-full h-screen p-5 flex items-center justify-center
            md:h-100">
                <div className="w-screen h-full rounded-2xl grid grid-cols-2 gap-3
                 md:w-6xl md:grid-cols-5">
                    <div className="bg-gray-200 col-span-2 rounded-2xl grid grid-rows-3
                    md:col-span-2 md:grid-rows-4">
                        <Lien to={`/articles/` + articles[1].id} className="row-span-2 md:row-span-3">
                            <img className="rounded-t-2xl w-full h-full object-cover" src={articles[1].image}/>
                        </Lien>
                        <div className="bg-gray-200 rounded-b-2xl p-3 flex items-center justify-center row-span-1
                        sm:text-xl">
                            <div className="flex items-center">
                                {articles[1].titre}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 col-span-2 rounded-2xl grid grid-rows-3
                    md:col-span-2 md:grid-rows-4">
                        <Lien to={`/articles/` + articles[2].id} className="row-span-2 md:row-span-3">
                            <img className="rounded-t-2xl w-full h-full object-cover" src={articles[2].image}/>
                        </Lien>
                        <div className="bg-gray-200 rounded-b-2xl p-4 flex items-center justify-center row-span-1
                        sm:text-xl">
                            <div className="flex items-center">
                                {articles[2].titre}
                            </div>
                        </div>
                    </div>
                    <Lien to="/articles" className="bg-gray-200 col-span-2 rounded-2xl flex flex-col justify-center items-center gap-5
                     md:col-span-1">
                        <div className="text-xl">---&gt;</div>
                        <div className="text-xl">Voir plus d'articles</div>
                    </Lien>
                </div>
            </div>
            <div className="bg-gray-100 mt-10 mb-10 w-screen h-screen flex flex-col">
                <div className="w-full h-full grid grid-cols-1 grid-rows-5
                md:grid-cols-11 md:grid-rows-6">
                    <div className="flex items-center justify-center col-span-1 row-span-1 text-lg
                    md:font-semibold md:col-start-4 md:row-span-2 md:col-span-5 md:text-3xl">Comment sont faits nos articles ?</div>
                    <div className="grid row-span-2
                     md:grid-cols-4 md:grid-rows-7 md:row-start-3 md:col-span-5 md:row-span-9 bg-gray-200">
                        <div className=" flex justify-center items-center p-5 text-center
                        md:col-span-4 md:row-start-1 md:row-span-4 md:text-2xl md:text-left md:pl-10">La grande majorité des articles que vous trouverez ici sont écrits par des personnes passionnées, qui mettent leur cœur et leur savoir dans chaque mot.</div>
                        <div className="flex justify-center items-center text-center
                        md:text-4xl md:col-span-2 md:row-start-5 md:row-span-2 md:col-start-1">HUMAIN</div>
                    </div>
                    <Triangle className="w-fit h-full fill-gray-200 md:row-start-3 md:row-span-9 md:col-start-6 hidden md:flex" />
                    <div className="grid row-span-2
                     md:grid-cols-3 md:grid-rows-7 md:row-start-3 md:col-start-7 md:col-span-5 md:row-span-9">
                        <div className=" flex justify-center items-center text-center flex-col
                        md:col-span-2 md:row-start-2 md:col-start-2 md:text-4xl">CHATGPT</div>
                        <div className=" flex justify-center items-center text-center p-5
                        md:col-span-3 md:row-start-3 md:row-span-5 md:text-2xl md:text-right md:p-10">Certains articles sont également rédigés avec l’aide de ChatGPT : il suffit que l'administrateur clique sur un bouton et donne une idée ou un axe, et l’article prend forme en quelques instants.</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}