import { redirect } from "react-router";

export async function loader() {
    const d = new Date(0).toUTCString()
    return redirect('/login', {
        headers: {
            // On retire le token
            'Set-Cookie': `token=; Expires=${d}`
        }
    })
}

export default () => <>
    Déconnexion 🥳
</>