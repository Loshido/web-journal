import { Links,
    Meta,
    Outlet,
    Scripts,
 } from "react-router";
import "./global.css"

export function Layout({ children }: { children: React.ReactNode }) {
    return <html lang="fr">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Links/>
            <Meta/>
        </head>
        <body>
            {children}
            <Scripts/>
        </body>
    </html>
}

export default function App() {
    return <Outlet />;
}