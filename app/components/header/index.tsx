import Lien from "~/components/Lien";

export default function Header() {
    return <header className="flex h-20 bg-gray-100 justify-center md:justify-between items-center text-center md:p-10 text-xl">
        <Lien to="/" className="flex p-2">
            Accueil
        </Lien>
        <div className="flex gap-5">
            <Lien to="/articles" className="hover:underline underline-offset-8 p-2">
                Articles
            </Lien>
            <Lien to="/login" className="border-2 p-2 hover:bg-black hover:text-white rounded-xl transition-colors duration-200">
                Connexion
            </Lien>
        </div>
    </header>
}

