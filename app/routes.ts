import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

// https://reactrouter.com/start/framework/routing
export default [
    index('./pages/index.tsx'),
    ...prefix('/articles', [
        index('./pages/articles/index.tsx'),
        route('/:article', './pages/articles/article.tsx')
    ]),
    ...prefix('/admin', [
        // Auth.tsx a un middleware pour vérifier que les utilisateurs sont authentifiés
        layout('./components/admin/Auth.tsx', [
            layout('./pages/admin/layout.tsx', [
                index('./pages/admin/index.tsx'),
                route('/articles', './pages/admin/articles/index.tsx'),
                route('/images', './pages/admin/images/index.tsx'),
                route('/utilisateurs', './pages/admin/utilisateurs/index.tsx'),
            ]),
            route('/articles/:article', './pages/admin/articles/article.tsx'),
        ]),
    ]),
    route('/logout', './pages/admin/logout.tsx'),
    route('/login', './pages/login.tsx')

] satisfies RouteConfig