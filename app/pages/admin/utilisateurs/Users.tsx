import { useState } from "react"

interface Props {
    users: string[],
    supprimer: (nom: string) => void
    renommer: (nom: string) => void,
    nouveau: () => void
}

export default ({ users, supprimer, renommer, nouveau }: Props) => {
    const [selection, setSelection] = useState<string>('') 

    return <div className="h-full w-full relative overflow-hidden
        p-4 md:p-8 flex flex-row flex-wrap gap-2 content-start">
        <h1 className="text-3xl font-semibold mr-8">
            Utilisateurs
        </h1>
        {
            users.map(user => <button key={user}
                className="px-2 py-1 border border-black/5 h-fit
                transition-colors hover:bg-black/5 active:bg-black/10 cursor-pointer"
                style={{
                    backgroundColor: selection === user ? '#0001' : 'unset'
                }}
                onClick={() => setSelection(user === selection ? '' : user)}>
                {
                    user
                }
            </button>)
        }
        <button className="px-2 py-1 bg-black border border-white text-white
            transition-colors hover:bg-black/75 active:bg-black/50 cursor-pointer rounded-sm"
            onClick={nouveau}>
            Créer un utilisateur
        </button>
        {
            selection.length !== 0 && <div id="selection-utilisateur"
                className="absolute bottom-0 left-0 z-10 w-full p-8 sm:p-12 md:p-16 bg-white pt-0">
                <h1 className="text-6xl font-semibold">
                    { selection }
                </h1>
                <div className="flex flex-row items-center gap-2 py-4">
                    <button className="px-2 py-1 border border-black/5 transition-colors 
                        hover:bg-black/5 active:bg-black/10 cursor-pointer rounded-sm"
                        onClick={() => supprimer(selection)}>
                        supprimer
                    </button>
                    <button className="px-2 py-1 border border-black/5 transition-colors 
                        hover:bg-black/5 active:bg-black/10 cursor-pointer rounded-sm"
                        onClick={() => renommer(selection)}>
                        renommer
                    </button>
                </div>
            </div>
        }
    </div>
}