import Header from "~/components/header"
import Footer from "~/components/footer"
import { type ArticleData, listArticles } from "~/lib/articles";
import { Route } from "./+types";

export async function loader(): Promise<ArticleData[]> {
    const articles = listArticles()
    return articles;
}

export default function Page({ loaderData: articles }: Route.ComponentProps) {
    return <div>
        <Header/>
        <div className="flex flex-col items-center justify-center w-screen mb-10 mt-5">
            <p className="text-xl m-5">Article les plus lickéss</p>
            <div className="bg-gray-100 rounded-2xl w-8xl h-100 p-5 flex items-center justify-center">
                <div className="w-6xl h-full rounded-2xl grid grid-cols-5 gap-3">
                    <div className="bg-gray-100 col-span-3 rounded-2xl">
                        <div className="w-full h-full rounded-2xl grid grid-rows-4 p-10">
                            <div className="text-7xl row-span-2 flex items-center pl-5">TITRE</div>
                            <div className="row-span-2 p-5"> Ceci est la description de l'article ayant eu le plus de like</div>
                        </div>
                    </div>
                    <div className="bg-amber-300 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl p-4 grid grid-cols-5">
                            <div className="col-span-3 flex items-center">Titre article le plus liké</div>
                            <div className="col-span-2 grid grid-cols-2 gap-5">
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-100 p-5 flex items-center justify-center">
                <div className="w-6xl h-full rounded-2xl grid grid-cols-5 gap-3">
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl p-4 grid grid-cols-5">
                            <div className="col-span-3 flex items-center">Titre 2</div>
                            <div className="col-span-2 grid grid-cols-2 gap-5">
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                        <div className="row-span-3"></div>
                        <div className="bg-gray-300 rounded-b-2xl text-xl p-4 grid grid-cols-5">
                            <div className="col-span-3 flex items-center">Titre 3</div>
                            <div className="col-span-2 grid grid-cols-2 gap-5">
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                                <button className="border-1 border-black flex items-center justify-center rounded-2xl">+</button>
                            </div>
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
    </div>}
