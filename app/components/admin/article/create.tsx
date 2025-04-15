import { useState } from "react"
import { Form } from "react-router";

const Inputs = () => <>
    <input type="text" name="titre" id="titre" 
        placeholder="Titre de l'article" 
        className="col-span-2 border outline-none p-3"/>

    <input type="text" name="identifiant" id="identifiant"
        placeholder="identifiant-de-l-article"
        className="border sm:border-l-0 outline-none p-3" />

    <textarea name="description" id="description" 
        placeholder="description de l'article"
        className="col-span-3 sm:border-t-0 border outline-none p-3 resize-y max-h-32"/>
</>

export default () => {
    const [ouvert, setOuvert] = useState(false)
    return <article onClick={() => {
        if(!ouvert) setOuvert(true);
    }}
        className="p-3 w-full h-full text-xl font-semibold transition-colors cursor-pointer
        flex flex-col justify-center items-center bg-black/5 hover:bg-black/15">
        Créer un article 📰

        {
            ouvert && <dialog open className="absolute top-0 left-0 h-screen w-screen bg-white/50 backdrop-blur-sm
                flex flex-col gap-3 justify-center items-center text-lg" onClick={(event) => {
                    const target = event.target as HTMLElement | null;
                    if(target?.tagName === "DIALOG") setOuvert(false);
                }}>
                <Form method="POST" className="flex flex-col w-full sm:w-auto sm:grid sm:grid-cols-3">
                    <Inputs/>
                    <button className="sm:border-t-0 sm:border-r-0 border outline-none p-3 transition-colors 
                        cursor-pointer hover:bg-blue-500 hover:text-white" type="submit">
                        Créer l'article
                    </button>
                    <button className="sm:border-t-0 sm:border-r-0 border outline-none p-3 transition-colors 
                        cursor-pointer hover:bg-orange-500 hover:text-white" type="button" onClick={() => {
                            const form = document.querySelector('form[method="POST"]') as HTMLFormElement | null;
                            if(!form) return;

                            const ia = document.createElement('input');
                            ia.name = 'ia';
                            ia.id = 'ia';
                            ia.value = 'true'
                            ia.style.display = 'none'
                            form.appendChild(ia);

                            form.submit();
                        }}>
                        Générer un article avec l'IA
                    </button>
                    <div onClick={() => setOuvert(false)}
                        className="border sm:border-t-0 p-3 text-center 
                        cursor-pointer transition-colors hover:bg-black/10">
                        Annuler
                    </div>
                </Form>
            </dialog>
        }
    </article>
}