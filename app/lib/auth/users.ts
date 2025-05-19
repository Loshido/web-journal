import fs from "fs";

interface Users {
    [key: string]: string,
}

const USERS_PATH = "./data/users.json";

export function verifier_identifiants(id: string, pass: string): boolean {
    const buffer = fs.readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;

    return id in users && users[id] === pass
}

export function lister_utilisateurs(): string[] {
    const buffer = fs.readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;
    return Object.keys(users)
}

export function creer_utilisateur(nom: string, pass: string): string | void {
    const buffer = fs.readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;

    if(nom in users) {
        return "L'utilisateur existe déjà."
    }
    users[nom] = pass
    fs.writeFileSync(USERS_PATH, JSON.stringify(users, undefined, 4), { encoding: 'utf-8' })
}
export function supprimer_utilisateur(nom: string): string | void {
    const buffer = fs.readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;
    
    if(nom in users) {
        delete users[nom]
        fs.writeFileSync(USERS_PATH, JSON.stringify(users, undefined, 4), { encoding: 'utf-8' })
        return
    }
    return "L'utilisateur n'existe pas"
    
}
export function modifier_utilisteur(nom: string, nouveau_nom: string) {
    const buffer = fs.readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;
    if(nom in users) {
        users[nouveau_nom] = users[nom];
        delete users[nom];
        fs.writeFileSync(USERS_PATH, JSON.stringify(users, undefined, 4), { encoding: 'utf-8' })
        return
    }
    return "L'utilisateur n'existe pas"
}