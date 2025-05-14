
export function Action(props: { titre: string, click: () => void }) {
    return <div 
        className="bg-white px-2 py-1 text-black hover:bg-white/75 transition-colors
        cursor-pointer select-none"
        onClick={props.click}>
        {
            props.titre
        }
    </div>
}

export function ThumbnailImage(props: { url: string, nom: string }) {
    return <>
        <div className="absolute h-full w-full top-0 left-0 
        -z-10 bg-black/10 backdrop-blur-xs"/>
        <img loading="lazy" src={props.url} alt={props.nom}   
            className="absolute h-full w-full object-contain top-0 left-0 -z-20" />
    </>
}

interface Thumbnail {
    nom: string,
    url: string,
    actions: {
        titre: string,
        click: () => void
    }[]
}
export default function(props: Thumbnail) {
    return <div className="relative h-48 min-w-64 border-black/25 p-4
        flex flex-col gap-2">
        <p className="font-semibold">
            { props.nom }
        </p>
        <div className="flex flex-row gap-2 text-xs">
            {
                props.actions.map(action => <Action key={action.titre} {...action}/>)
            }
        </div>
        <ThumbnailImage
            nom={props.nom}
            url={props.url}/>
    </div>
}