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

        <Lien  to="/articles">
        <div className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 p-2 rounded-2xl w-fit"> ⬅️ Revenir aux articles </div>
           
        </Lien>
    </div>
}