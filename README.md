# projet WEB S2

## Structure technique

- Framework Javascript -> [React](https://react.dev)
- (avec [React router](https://reactrouter.com/home))

- Framework Frontend (CSS) -> [Tailwindcss](https://tailwindcss.com)

*`~/` corresponds à `./app/` depuis n'importe où à l'intérieur de `app`.

## Structure

- `app/components` corresponds aux composants réutilisables dans toute l'application
- `app/pages` corresponds aux différents chemins d'accès définis dans `app/routes.ts`
- `app/lib` corresponds aux modules côté serveur.

## Routes

![routes](/public/routes.png)

## Commandes

- `bun install` permet d'installer les dépendances *(ou `npm install`)*
- `bun dev` permet de lancer un serveur de développement *(ou `npm run dev`)*
- `bun run build` permet de compiler l'application. *(ou `npm run build`)*

`--host` permet d'accéder au site depuis l'extérieur / wifiisen (écoute sur toutes les interfaces).

## Mise en place du projet

L'un des points qui différencie notre projet des autres et que l'on utilise l'IA pour générer nos articles. (Un vrai moteur des fausses informations).

Pour procéder vous devez inclure dans le fichier `.env` les clés permettant d'utiliser le model via l'API de Cloudflare. (Normalement elles sont dans l'archive envoyée)

Enfin il faut installer les dépendances `bun install` ou `npm install`.

### Connexion
- Identifiant : `guest`
- Mots de pase : `guest`