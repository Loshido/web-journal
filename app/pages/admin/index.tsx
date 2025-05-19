import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
    className?: string
    id?: string,
    to: string,
    children?: ReactNode,
}
export const Partie = ({ className, id, to, children }: Props) => <Link id={id} to={to}
    className={[
        "bg-black/5 rounded py-16 px-8 md:p-8 hover:bg-black/10", 
        "transition-colors cursor-pointer",
        "flex flex-col relative group duration-500",
        className
    ].join(' ')}>
    { children }
</Link>

import './accueil.css'
export default function Page() {
    return <section className="p-4 md:p-8 xl:p-12 flex flex-col gap-3 xl:gap-6 md:grid grid-cols-6 grid-rows-6 h-svh w-full">
        <div className="col-span-3 flex flex-col justify-center">
            <h1 className="text-3xl xl:text-5xl font-black xl:leading-20">Page d'administration</h1>
            <p className="text-sm xl:text-base italic font-light">
                La plateforme qui vous permet d'exprimer votre créativité
            </p>
        </div>
        <Partie id="users" to="/admin/utilisateurs" className="col-span-3 row-span-3 ">
            <h1 className="text-2xl md:text-4xl font-black uppercase">Le Coffre</h1>
            <p className="font-light">
                L'espace de gestion des permissions
            </p>
            <div className="absolute top-0 left-0 -z-10 w-full h-full duration-500
                opacity-5 group-hover:opacity-15 transition-opacity"></div>
        </Partie>
        <Partie id="gallerie" to="/admin/images" className="col-span-3 row-span-2 justify-start text-end">
            <h1 className="text-2xl md:text-4xl font-black uppercase">La Gallerie</h1>
            <p className="font-light max-w-1/2 ml-auto">
                L'espace qui donnera la forme de vos propos
            </p>
            <img src="/assets/gallerie.png" alt="Gallerie" 
                className="w-full h-full absolute top-0 left-0 -z-10 grayscale-100
                group-hover:grayscale-0 object-cover object-left opacity-25 sm:opacity-100"/>
        </Partie>
        <Partie id="fabrique" to="/admin/articles" className="col-span-6 row-span-3 items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase">La Fabrique</h1>
            <p className="font-light lg:text-2xl">
                L'espace de création
            </p>
            <img src="/assets/fabrique.png" alt="Fabrique" 
                className="w-full h-full absolute top-0 left-0 -z-10 grayscale-100
                group-hover:grayscale-0 object-cover"/>
        </Partie>
    </section>
}