import Lien from "~/components/Lien";
import { ArticleData } from "~/lib/articles";

type Props = {
    article: ArticleData,
    supprimer: (id: string) => void
}
    
export default ({ article, supprimer }: Props) => <article 
    className="p-3 w-full h-full max-h-48 bg-black/5
    flex flex-col justify-between">
    <div>
        <h3 className="font-semibold text-lg">
            { article.titre }
        </h3>
        <p className="text-xs">
            { article.description }
        </p>
    </div>
    <div className="flex flex-row flex-wrap gap-2 select-none">
        <Lien to={'/admin/articles/' + article.id} className="px-2 py-1 text-sm cursor-pointer
            bg-blue-600 hover:bg-blue-500 transition-colors text-white">
            Modifier
        </Lien>
        <div onClick={() => supprimer(article.id)}
            className="px-2 py-1 text-sm cursor-pointer
            hover:bg-black/10 transition-colors text-black">
            Supprimer
        </div>
    </div>
</article>