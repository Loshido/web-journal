import { Outlet, useLocation } from "react-router";

import Articles from "~/components/icons/articles";
import Back from "~/components/icons/back";
import Square from "~/components/icons/square";
import Images from "~/components/icons/images"
import Users from "~/components/icons/users";

import Lien from "~/components/Lien";

import type { JSX } from "react";
import Logout from "~/components/icons/logout";
const liens = [
    {
        slot: <Back className="w-5 h-5"/>,
        chemin: "/",
        titre: "Site"
    },
    {
        slot: <Square className="w-5 h-5"/>,
        chemin: "/admin",
        titre: "Accueil",
    },
    {
        slot: <Articles className="w-5 h-5"/>,
        chemin: "/admin/articles",
        titre: "Articles"
    },
    {
        slot: <Images className="w-5 h-5"/>,
        chemin: "/admin/images",
        titre: "Images"
    },
    {
        slot: <Users className="w-5 h-5"/>,
        chemin: "/admin/utilisateurs",
        titre: "Utilisateurs"
    }
] satisfies {
    slot: JSX.Element,
    chemin: string,
    titre: string
}[]

export default function Layout() {
    const location = useLocation()
    return <div className="h-screen w-screen flex flex-col sm:flex-row">
        <div className="w-screen justify-between flex-row sm:h-screen sm:w-auto p-1 sm:p-2 flex sm:flex-col gap-1 border-b sm:border-r border-black/5 text-black">
            <div className="flex-row flex sm:flex-col gap-1">
                {
                    liens.map(lien => <Lien key={lien.chemin} 
                        title={lien.titre}
                        className={[
                        location.pathname === lien.chemin 
                            ? 'bg-black/15' : 'hover:bg-black/10',
                        "p-3 rounded transition-colors text-black"].join(" ")}
                        to={lien.chemin}>
                        { lien.slot }
                    </Lien>)
                }
            </div>
            <div className="flex-row flex sm:flex-col gap-1">
                <Lien title="Déconnexion" to="/logout" prefetch="none"
                    className="hover:bg-black/10 p-3 rounded transition-colors text-black cursor-pointer">
                    <Logout className="w-5 h-5"/>
                </Lien>
            </div>
        </div>
        <Outlet/>
    </div>
}