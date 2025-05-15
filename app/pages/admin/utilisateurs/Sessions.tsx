import { TOKEN_EXPIRATION } from "~/lib/auth"

interface Props {
    sessions: {
        token: string,
        createdAt: number
    }[],
    supprimer: (token: string) => void
}

export default ({ sessions, supprimer }: Props) => {
    return <>
        <h1 className="text-3xl font-semibold">
            Sessions
        </h1>
        <p className="my-1 text-sm">
            les sessions de connexions à la plateforme administrateurs.
        </p>
        {
            sessions.map((session, i) => <div className="grid grid-cols-2" key={i}>
                <div className="flex flex-row gap-4 items-center">
                    <h2 className="font-semibold text-2xl">
                        { session.token.slice(0, 3) }
                    </h2>
                    <i className="text-xs">
                        expire à { new Date(session.createdAt + TOKEN_EXPIRATION)
                            .toLocaleTimeString(undefined, {
                                timeStyle: 'short'
                            }) 
                        }
                    </i>
                </div>
                <div className="w-full h-full flex flex-row justify-end items-center">
                    <button className="px-2 py-1 bg-black text-white text-xs hover:bg-black/75 active:bg-black/50
                        transition-colors select-none cursor-pointer rounded-sm"
                        onClick={() => supprimer(session.token)}>
                        Supprimer
                    </button>
                </div>
            </div>)
        }
    </>
}