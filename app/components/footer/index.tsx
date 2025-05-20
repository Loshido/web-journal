import Lien from "../Lien"
import Logo from "~/components/icons/logo"

export default function Footer() {
    return <footer className="w-svw h-screen bg-gray-100 grid grid-cols-1
    md:grid-cols-4 md:h-auto">
        <div className="grid w-full h-full md:grid-rows-2 md:grid-cols-2 md:col-span-3 relative">
            <div className="grid w-full col-span-2 row-span-1
            md:grid-cols-2 ">
                <div className="grid grid-rows-3 p-5 pl-10">
                    <div className="flex row-span-2 justify-center items-center">Ce site est un projet de webdev. L’idée de ce projet est d’allier toutes connaissances dans ce domaine pour faire une production originale</div>
                    <div className="flex row-span-1 items-center font-semibold">Livio A, Maxime G et Tom R</div>
                </div>
                <div className="grid col-span-1 grid-cols-2">
                    <div className="flex flex-col p-3 gap-2">
                        <h1 className="font-semibold flex items-center text-4xl">Pages</h1>
                        <div className="flex flex-col pl-4">
                            <Lien className="text-black" to="/">Accueil</Lien>
                            <Lien className="text-black " to="/articles">Artciles</Lien>
                            <Lien className="text-black" to="/admin">Administration</Lien>
                        </div>
                    </div>
                    <div className="flex flex-col p-3 gap-2">
                        <h1 className="font-semibold flex items-center text-4xl">Lien utiles</h1>
                        <div className="flex flex-col pl-4">
                            <Lien className="text-black" to="/">Accueil</Lien>
                            <Lien className="text-black " to="/articles">Artciles</Lien>
                            <Lien className="text-black" to="/admin">Administration</Lien>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="flex w-full h-full text-8xl
             md:justify-start md:items-end md:row-span-1 md:row-start-2 md:col-span-2 md:text-9xl pb-0 ">LE BLOG</h1>   
        </div>
        <div className="hidden md:p-6 md:flex md:justify-center md:items-center md:col-span-1 object-cover">
            <Logo className="fill-black w-full h-full"/>
        </div>
    </footer>
}
