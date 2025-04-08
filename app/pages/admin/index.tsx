import Lien from "~/components/Lien";

export default () => <div className="p-5"   >
    <p>
        /admin
    </p>
    <p>
        On a le choix entre modifier, supprimer ou créer un article
        (Les articles existants seront listés)
    </p>

    <Lien to="/login">
        Revenir à la page de connexion
    </Lien>
    <Lien to={"/admin/" + Math.floor(Math.random() * 99999999).toString(36)}>
        Aller à une page random
    </Lien>
</div>