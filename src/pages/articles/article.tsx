import { useParams } from "react-router-dom"
import Lien from "~/components/Lien"

export default () => {
    const params = useParams()

    return <div>    
        <p>
            /articles/{params.article}
        </p>

        <Lien to="/articles">
            Revenir aux articles
        </Lien>
    </div>
}