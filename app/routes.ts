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
        layout('./pages/admin/layout.tsx', [
            index('./pages/admin/index.tsx'),
            route('/articles', './pages/admin/articles/index.tsx'),
            route('/images', './pages/admin/images/index.tsx'),
            route('/utilisateurs', './pages/admin/utilisateurs/index.tsx'),
        ]),
        route('/articles/:article', './pages/admin/articles/article.tsx')
    ]),
    route('/login', './pages/login.tsx')

] satisfies RouteConfig