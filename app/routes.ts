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
    layout('./components/admin/Auth.tsx', 
        prefix('/admin', [
            index('./pages/admin/index.tsx'),
            route('/:article', './pages/admin/article.tsx')
        ]
    )),
    route('/login', './pages/login.tsx')

] satisfies RouteConfig