# projet WEB S2

## Structure technique

- Framework Javascript -> [React](https://react.dev)
- (avec [React router](https://reactrouter.com/home))

- Framework Frontend (CSS) -> [Tailwindcss](https://tailwindcss.com)

*`~/` corresponds à `./src/` depuis n'importe où à l'intérieur de `src`.

## Structure

- `src/components` corresponds aux composants réutilisables dans toute l'application
- `src/pages` corresponds aux différents chemins d'accès définis dans `src/main.tsx`

## Commandes

- `bun install` permet d'installer les dépendances
- `bun dev` permet de lancer un serveur de développement (hot reload)
- `bun run build` permet de compiler l'application dans `./dist` pour qu'elle soit distribué de façon statique.
- `bun run preview` sert les fichiers statiques contenus dans `./dist`