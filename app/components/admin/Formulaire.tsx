import { Form } from "react-router";

export default () => <Form method="POST" className="flex flex-col gap-6">
    <p className="mx-2 px-2 py-1 font-medium">
        Connectez-vous à la page d'administration
    </p>
    <input className="outline-none mx-2 px-4 py-2 bg-black/5 w-fit"
        type="text" placeholder="Identifiant" name="id"
        autoComplete="off" />
    <input className="outline-none mx-2 px-4 py-2 -mt-4 bg-black/5 w-fit"
        type="password" placeholder="Mots de passe" name="pass"
        autoComplete="off" />
    <button type="submit" className="outline-none mx-2 px-4 py-2 w-fit text-sm font-medium
        bg-blue-700/50 text-white hover:bg-blue-700/65 transition-colors cursor-pointer">
        Connexion
    </button>
</Form>