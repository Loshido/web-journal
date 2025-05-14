import type { ReactNode } from "react"
import { ArticleData } from "~/lib/articles"

type Comp = {
    children: ReactNode,
}

export const Item = ({ children }: Comp) => <div 
    className={`grid grid-cols-3 border-t border-black/10 text-lg`}>
    { children }
</div>

export const Key = ({ children }: Comp) => <div 
    className="px-3 py-2 border-r border-black/10">
    { children }
</div>

type MetaProps = {
    article: ArticleData,
    update: (article: Partial<ArticleData>) => void
} 
export default ({ article, update }: MetaProps) => <>
    <Item>
        <Key>
            id
        </Key>
        <input type="text" onInput={(event) => {
            const target = event.target as HTMLInputElement
            update({ id: target.value });
        }} className="px-3 py-2 outline-none col-span-2" defaultValue={article.id} />
    </Item>
    <Item>
        <Key>
            titre
        </Key>
        <input type="text" onInput={(event) => {
                const target = event.target as HTMLInputElement
                update({ titre: target.value });
            }} className="px-3 py-2 outline-none col-span-2" defaultValue={article.titre} />
    </Item>
    <Item>
        <Key>
            description
        </Key>
        <input type="text" onInput={(event) => {
                const target = event.target as HTMLInputElement
                update({ description: target.value });
            }} className="px-3 py-2 outline-none col-span-2" defaultValue={article.description} />
    </Item>
    <Item>
        <Key>
            image
        </Key>
        <input type="text" onInput={(event) => {
                const target = event.target as HTMLInputElement
                update({ image: target.value });
            }} className="px-3 py-2 outline-none col-span-2" defaultValue={article.image} />
    </Item>
</>