
import Lien from "~/components/Lien";

export default function Header() {
    return <header className="flex h-20 bg-gray-100 justify-between items-center p-10 text-xl">
        <Lien to="/">
            Accueil
        </Lien>
        <div className="flex gap-5">
            <Lien to="/articles" className="hover:underline underline-offset-8">
                Articles
            </Lien>
            <Lien to="/login" className="hover:underline underline-offset-8 ">
                Connexion
            </Lien>
        </div>
    </header>
}

