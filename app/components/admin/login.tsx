import { Form } from "react-router";
import Lien from "~/components/Lien"


export default () => <Form method="POST" className="flex flex-col gap-6 items-center sm:items-stretch">
    <p className="mx-2 px-2 py-1 font-semibold text-lg text-center justify-center items-center">
        Connectez-vous à la page d'administration
    </p> 
    <input className="outline-none mx-2 px-4 py-2 bg-black/5 w-fit sm:w-full rounded-lg"
        type="text" placeholder="Identifiant" name="id"
        autoComplete="off" />
    <input className="outline-none mx-2 px-4 py-2 -mt-4 bg-black/5 w-fit sm:w-full rounded-lg"
        type="password" placeholder="Mots de passe" name="pass"
        autoComplete="off" />
    <div className="flex justify-between">
        <button type="submit" className="outline-none mx-2 px-4 py-2 w-fit text-sm font-medium border-1 transition-colors duration-150
            hover:bg-black hover:text-white cursor-pointer rounded-lg">
            Connexion
        </button>
        <Lien className="rounded-lg border-1 px-4 py-2 text-sm w-fit
        hover:bg-black hover:text-white transition-colors duration-150" to="/">
                    Revenir à la page d'accueil
        </Lien>
    </div>
</Form>