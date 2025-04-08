import { useParams } from "react-router"
import Lien from "~/components/Lien"

export default () => {
    const params = useParams()

    return <div className="p-5">
        <p>
            /admin/{params.article}
        </p>
        <p>
            On modifie l'article { params.article }
        </p>

        <Lien to="/admin">
            Revenir en arrière
        </Lien>
    </div>
}