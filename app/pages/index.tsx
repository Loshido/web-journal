import Lien from "~/components/Lien";

export default () => <div className="p-5">
    <p>
        La page d'accueil montre les articles les plus populaires.
    </p>

    <img className="m-4" src="/routes.png"/>

    <Lien to="/articles">
        aller à <code>/articles</code>
    </Lien>
    <Lien to="/login">
        aller à la page de connexion
    </Lien>
</div>