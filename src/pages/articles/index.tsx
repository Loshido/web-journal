import Lien from "~/components/Lien";

export default () => <div>
    <p>
        /articles
    </p>

    <Lien to={`/articles/` + Math.floor(Math.random() * 9999999999).toString(36)} >
        aller à un article random
    </Lien>
    <Lien to="/">
        aller à la page d'accueil
    </Lien>
</div>