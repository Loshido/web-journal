import { Outlet, redirect, unstable_MiddlewareFunction } from "react-router"
import auth from "~/lib/auth"

const protection: unstable_MiddlewareFunction = ({ request }, next) => {
    // Il faut trouver un moyen d'accéder au jeton dans les cookies
    const token = 'haaaaaa' 
    if(auth.authentificate(token)) {
        return next()
    }
    
    throw redirect('/login', {
        status: 302
    })
}

export const unstable_middleware = [protection];
export default () => <Outlet/>
