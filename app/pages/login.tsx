import Lien from "~/components/Lien";

export default () => {
    return <div>
        <p>
            /login
        </p>
        
        <Lien to="/admin">
            aller à <code>/admin</code>
        </Lien>
        <Lien to="/">
            aller à l'accueil
        </Lien>
    </div>
}