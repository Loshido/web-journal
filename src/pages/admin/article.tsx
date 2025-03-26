import { useParams } from "react-router-dom"
import Lien from "~/components/Lien"

export default () => {
    const params = useParams()

    return <div>
        <p>
            /admin/{params.article}
        </p>

        <Lien to="/admin">
            Revenir en arrière
        </Lien>
    </div>
}