import Lien from "~/components/Lien";

export default () => <div className="p-5">
    <p>
        /login
    </p>
    <p>
        Page de connexion à la partie d'édition
    </p>
    
    <Lien to="/admin">
        aller à <code>/admin</code>
    </Lien>
    <Lien to="/">
        aller à l'accueil
    </Lien>
</div>