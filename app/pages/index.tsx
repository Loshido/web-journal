import Header from "~/components/header"
import Footer from "~/components/footer"


export default () => <div>
    <Header/>
    <div className="flex flex-col items-center justify-center w-screen mb-10 mt-5">
        <p className="text-xl m-5">Article les plus lickés</p>
        <div className="w-full h-100 p-5 flex items-center justify-center">
            <div className="w-6xl h-full grid grid-cols-1 grid-rows-4 rounded-2xl">
                <div className="row-span-3 bg-amber-300 rounded-t-2xl"></div>
                <div className="row-span-1 bg-gray-300 rounded-b-2xl flex justify-between items-center p-10">
                    <div className="text-2xl">Titre article 1</div>
                    <button className="border-2 border-black rounded-2xl h-10 w-10 flex justify-center items-center">
                        +
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-100 p-5 flex items-center justify-center">
            <div className="w-6xl h-full rounded-2xl grid grid-cols-5 gap-3">
                <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                    <div className="row-span-3"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre article 2</div>
                </div>
                <div className="bg-red-200 col-span-2 rounded-2xl grid grid-rows-4">
                    <div className="row-span-3"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre article 3</div>
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