import { useSubmit } from "react-router"
import { Route } from "./+types"
import Sessions from "./Sessions"
import Users from "./Users"

import { lister_sessions, supprimer_session } from "~/lib/auth/sessions"
import { creer_utilisateur, lister_utilisateurs, modifier_utilisteur, supprimer_utilisateur } from "~/lib/auth/users"

//* l'exaustivité des conditions permet de garder le "typesafety"
export async function action({ request }: Route.ActionArgs) {
    // Formatage des données de la requête
    const payload = await request.json() as object
    const formatted = 'type' in payload
    if(!formatted) return "Requête non-conforme"

    if(payload.type === 'supprimer-token' && 'token' in payload
        && typeof payload.token === 'string') {
        supprimer_session(payload.token)
        return
    } else if(payload.type === 'supprimer-user' && 'nom' in payload
        && typeof payload.nom === 'string') {
        return supprimer_utilisateur(payload.nom)
    } else if(payload.type === 'renommer-user' && 'nom' in payload
        && typeof payload.nom === 'string' && 'nouveau_nom' in payload
        && typeof payload.nouveau_nom === 'string') {
        return modifier_utilisteur(payload.nom, payload.nouveau_nom)
    } else if(payload.type === 'nouveau-user' && 'nom' in payload
        && typeof payload.nom === 'string' && 'pass' in payload
        && typeof payload.pass === 'string') {
        return creer_utilisateur(payload.nom, payload.pass)
    }
}

export async function loader() {
    const users = lister_utilisateurs();
    const sessions = lister_sessions();
    return {
        users,
        sessions
    }
}

export default ({ loaderData: { sessions, users } }: Route.ComponentProps) => {
    const submit = useSubmit()
    return <section className="flex flex-col md:grid md:grid-cols-3 w-full h-full">
        <div className="col-span-1 border-b md:border-b-0 md:border-r border-black/5 p-4 md:p-8">
            <Sessions sessions={sessions} 
                supprimer={async (token: string) => await submit({
                    type: 'supprimer-token',
                    token
                }, { method: 'POST', encType: 'application/json' })} />
        </div>
        <div className="col-span-2 h-full w-full">
            <Users users={users}
                nouveau={async () => {
                    const nom = prompt(`Entrez le nom du nouvel utilisateur.`)
                    const pass = prompt(`Entrez son mots de passe.`)
                    if(nom && pass && nom.length > 3 && pass.length > 4) {
                        await submit({
                            type: 'nouveau-user',
                            nom,
                            pass
                        }, { method: 'POST', encType: 'application/json' })
                    }
                }}
                supprimer={async (nom: string) => {
                    const confirmation = prompt(
                        `Êtes-vous certain(e) de vouloir supprimer `
                        +`l'utilisateur ${nom}? (oui / non)`
                    )
                    if(confirmation?.toLowerCase() !== 'oui') return
                    await submit({
                        type: 'supprimer-user',
                        nom
                    }, { method: 'POST', encType: 'application/json' })
                }}
                renommer={async (nom: string) => {
                    const nouveau_nom = prompt(
                        `Entrez le nouveau nom de l'utilisateur`
                    )
                    if(!nouveau_nom) {
                        alert('Mauvaise saisie!')
                        return
                    }
                    if(nouveau_nom && nouveau_nom?.length < 4) {
                        alert('Nom trop court')
                        return
                    }
                    await submit({
                        type: 'renommer-user',
                        nom,
                        nouveau_nom
                    }, { method: 'POST', encType: 'application/json' })
                }} />
        </div>
    </section>
}