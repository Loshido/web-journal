import { Outlet, redirect, unstable_MiddlewareFunction } from "react-router"
import auth from "~/lib/auth"

// Ressources
// - Liste et format des headers / en-têtes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers
// - Middleware avec reactrouter: https://reactrouter.com/start/changelog#middleware-unstable

// Middleware: Une fonction sur le serveur qui effectue 
// généralement une vérification d'identité à chaque requête.

const protection: unstable_MiddlewareFunction = ({ request }, next) => {
    // on cherche à récuper le cookie 'token' 
    // pour vérifier si l'utilisateur est connecté.


    // Cookie: <name>=<value>; <name>=<value>; ...
    // 'a;b;c;d'.split('c') == ['a', 'b', 'c', 'd']
    const cookies = request.headers.get('Cookie')?.split(';');
    if(!cookies) throw redirect('/login', {
        status: 302
    })

    // On cherche si l'un des cookies est bien le cookie 'token' et qu'il soit valide.
    const logged = cookies.some(cookie => {
        const [cle, valeur] = cookie.split('=');
        if(cle !== 'token') return false;
        if(auth.authentificate(valeur)) return true
    })

    if(logged) {
        // On passe au middleware suivant,
        // sploiler: c'était le dernier
        return next()
    }
    throw redirect('/login', {
        status: 302
    })
}

// On export le middlware là où reactrouter va le chercher.
export const unstable_middleware = [protection];

// Comme il s'agit d'un "layout",
// on renvoie la page dessous.
// https://reactrouter.com/api/components/Outlet#outlet
export default () => <Outlet/>
