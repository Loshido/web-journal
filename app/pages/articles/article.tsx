import { useParams } from "react-router"
import Lien from "~/components/Lien"

export default () => {
    const params = useParams()

    return <div className="p-5">    
        <p>
            /articles/{params.article}
        </p>
        <p>
            On affiche l'article { params.article }
        </p>

        <Lien to="/articles">
            Revenir aux articles
        </Lien>
    </div>
}