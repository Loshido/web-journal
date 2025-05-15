import Formulaire from "~/components/admin/login";
import Lien from "~/components/Lien";
import { Route } from "./+types/login";
import { redirect } from "react-router";
import { traitementsCookies } from "~/components/admin/Auth";
import { login, authentificate, TOKEN_EXPIRATION } from "~/lib/auth";

// Lorsque le formulaire est envoyé, le serveur execute cette fonction.
// https://reactrouter.com/start/framework/actions
export async function action({
    request,
  }: Route.ActionArgs) {

    // On récupère les données du formulaires
    const formData = await request.formData();
    const id = formData.get('id')
    const pass = formData.get('pass')

    // S'ils ne sont pas donnés on renvoie à /admin, 
    // l'utilisateur étant potentiellement déjà connecté
    // s'il ne l'est pas, il sera dégagé par le middleware.
    if(!pass || !id) throw redirect('/admin');

    // On vérifie avec la "base de données"
    const token = login(id.toString(), pass.toString());
    if(token.length === 0) throw redirect('/admin');

    const expiration = new Date(Date.now() + TOKEN_EXPIRATION).toUTCString()

    // On l'emmène à la page d'administration
    return redirect('/admin', {
        headers: {
            // On dit au client d'ajouter un cookie avec le jeton d'authentification
            'Set-Cookie': `token=${token}; Expires=${expiration}`
        }
    })
}

export async function loader({ request }: Route.LoaderArgs): Promise<void> {
    const cookies = traitementsCookies(request);
    if('token' in cookies && authentificate(cookies.token)) {
        throw redirect('/admin')
    }
}

export default ({  }: Route.ComponentProps) => {

    return <section className="w-screen h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        <img className="w-full h-full md:col-span-5 absolute z-0" src="/Dev.jpeg"/>
        <div className="md:col-span-3 md:col-start-2 z-10 md:row-span-2 flex flex-col justify-center items-center">
            <div className=" w-xl h-1/2  flex justify-center items-center rounded-2xl bg-white/80">

                <Formulaire/>   

            </div>
            
        </div>
    </section>
}