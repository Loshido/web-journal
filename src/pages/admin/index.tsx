import Lien from "~/components/Lien";

export default () => <div>
    <p>
        /admin
    </p>

    <Lien to="/login">
        Revenir à la page de connexion
    </Lien>
    <Lien to={"/admin/" + Math.floor(Math.random() * 99999999).toString(36)}>
        Aller à une page random
    </Lien>
</div>