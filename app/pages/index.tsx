import Lien from "~/components/Lien";

export default () => <div>
    <p>
        Hello, World!
    </p>

    <Lien to="/articles">
        aller à <code>/articles</code>
    </Lien>
    <Lien to="/login">
        aller à la page de connexion
    </Lien>
</div>