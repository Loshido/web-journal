import Lien from "~/components/Lien";
import Header from "~/components/header"
import Footer from "~/components/footer"

export default () => 
    <div>
        <Header/>
            

        <div className="flex flex-col items-center w-screen mb-10 mt-5">
            <h1>
                /articles
            </h1>
            <h1 className="font-bold ">
                Retrouvez tous les articles sur cette même page 📄
            </h1>
            <div className="w-full p-5 flex mt-4 items-center justify-center">
            <div className="w-6xl rounded-2xl grid grid-cols-3 gap-11 grid-rows-3">
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 1</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 2 </div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 3</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 4</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 5</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 6</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 7</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2"></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 8</div>
                </div>
                <div className="bg-blue-600   col-span-1 rounded-2xl grid grid-rows-3">
                    <div className="row-span-2 "></div>
                    <div className="bg-gray-300 rounded-b-2xl text-xl flex items-center p-5">Titre 9</div>
                </div>
                
                
            </div>
            </div>

            <Lien className="bg-black" to={`/articles/` + Math.floor(Math.random() * 9999999999).toString(36)} >
                aller à un article random
            </Lien>
              <Lien  to="/">
                    <div className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 p-2 rounded-2xl w-fit"> 🏠 aller à la page d'accueil </div>
                       
                    </Lien>
        </div>

        <Footer/>
    </div>