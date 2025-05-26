import Lien from "../Lien"
import Logo from "~/components/icons/logo"

export default function Footer() {
    return <footer className="w-svw h-auto bg-gray-100 grid grid-cols-1
    md:grid-cols-4">
        <div className="flex flex-col gap-16 md:gap-0 md:grid w-full h-full md:grid-rows-2 md:grid-cols-2 md:col-span-3 relative">
            <div className="grid w-full col-span-2 row-span-1
            md:grid-cols-2 ">
                <div className="grid grid-rows-2 p-5 pl-10">
                    <p>
                        Ce site est un projet de webdev. 
                        L’idée de ce projet est d’allier toutes nos connaissances dans ce domaine 
                        pour faire <strong>une production originale</strong>
                    </p>
                    <div className="flex row-span-1 items-center font-semibold">Livio A, Maxime G et Tom R</div>
                </div>
                <div className="grid col-span-1 grid-col-1 md:grid-cols-2">
                    <div className="flex flex-col p-3 gap-2">
                        <h1 className="font-semibold flex items-center text-4xl">Pages</h1>
                        <div className="flex flex-col pl-4">
                            <Lien to="/">Accueil</Lien>
                            <Lien to="/articles">Articles</Lien>
                            <Lien to="/admin">Administration</Lien>
                        </div>
                    </div>
                    <div className="flex flex-col p-3 gap-2">
                        <h1 className="font-semibold flex items-center text-4xl">Liens utiles</h1>
                        <div className="flex flex-col pl-4">
                            <Lien target="_blank" to="https://github.com/Loshido/web-journal">
                                Projet
                            </Lien>
                            <div className="flex flex-row items-center gap-1">
                                <Lien target="_blank" to="https://react.dev">
                                    React
                                </Lien>
                                <p className="font-black">
                                    &
                                </p>
                                <Lien target="_blank" to="https://reactrouter.com">
                                    Reactrouter
                                </Lien>
                            </div>
                            <Lien target="_blank" to="https://tailwindcss.com">
                                Tailwindcss
                            </Lien>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="flex w-full h-full text-8xl
             md:justify-start md:items-end md:row-span-1 md:row-start-2 col-span-2 
             sm:text-9xl pb-0 xl:text-[230px] xl:leading-[67%]">
                LE BLOG
            </h1>   
        </div>
        <div className="hidden md:p-6 md:flex md:justify-center md:items-center md:col-span-1 object-cover">
            <Logo className="fill-black w-full h-full"/>
        </div>
    </footer>
}
