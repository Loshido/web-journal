import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Pages from './pages'
import Articles from './pages/articles'
import Article from './pages/articles/article'
import Login from './pages/login'
import Admin from './pages/admin'
import AdminArticle from './pages/admin/article'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Pages/>} />
                <Route path='articles'>
                    <Route index element={<Articles/>} />
                    <Route path=':article' element={<Article/>} />
                </Route>
                <Route path='login' element={<Login/>} />
                <Route path='admin'>
                    <Route index element={<Admin/>} />
                    <Route path=':article' element={<AdminArticle/>} />
                </Route>
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
