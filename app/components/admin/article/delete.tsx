type Props = {
    id: string | null,
    annuler: () => void,
    supprimer: () => void
}

export default (props: Props) => {
    if(!props.id) return null;

    return <dialog open className="h-screen w-screen bg-white/50 backdrop-blur-sm
        flex flex-col gap-3 justify-center items-center absolute top-0 left-0"
        onClick={(event) => {
            const target = event.target as HTMLElement | null;
            if(target?.tagName == "DIALOG") props.annuler()
        }}
        >
        <p className="text-xl font-medium">
            Voulez-vous vraiment supprimer { props.id }
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
            <div className="px-2 py-1 bg-red-600/20 hover:bg-red-600/40
                cursor-pointer transition-colors" onClick={props.supprimer}>
                Oui, supprimer
            </div>

            <div className="px-2 py-1 bg-green-600/20 hover:bg-green-600/40
                cursor-pointer transition-colors" onClick={props.annuler}>
                Non, annuler
            </div>
        </div>
    </dialog>
}