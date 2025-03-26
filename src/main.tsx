import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Pages
import Pages from './pages'
import Articles from './pages/articles'
import Article from './pages/articles/article'
import Login from './pages/login'
import Admin from './pages/admin'
import AdminArticle from './pages/admin/article'

const router = createBrowserRouter([
    {
        index: true,
        Component: Pages,
    },
    {
        path: "articles",
        children: [
            {
                index: true,
                Component: Articles,
            },
            {
                path: ':article',
                Component: Article
            }
        ]
    },
    {
        path: "login",
        Component: Login
    },
    {
        path: "admin",
        children: [
            {
                index: true,
                Component: Admin
            },
            {
                path: ':article',
                Component: AdminArticle
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
