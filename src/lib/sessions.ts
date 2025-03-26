import { readFileSync, writeFileSync } from "fs"

interface Session {
    token: string,
    createdAt: number
}

// Les tokens expirent après 4 heures.
const TOKEN_EXPIRATION = 1000 * 60 * 60 * 4;
const SESSION_PATH = './data/sessions.json';

// génère un token et le stocke
export function generateToken(): string {
    const token = Math.floor(Math.random() * 99999999).toString(36);

    // On stocke la session
    insert({
        token,
        createdAt: Date.now()
    })

    return token
}

// vérifie si un token est valide.
export function authentificateToken(token: string): boolean {
    const sessions = read();
    for(const session of sessions) {
        if(session.token === token && session.createdAt + TOKEN_EXPIRATION < Date.now()) {
            return true;
        }
    }
    return false;
}

// renvoie les sessions
function read(): Session[] {
    const buffer = readFileSync(SESSION_PATH,  { encoding: 'utf-8' });
    const sessions = JSON.parse(buffer);
    if(typeof sessions === 'object' && sessions instanceof Array) {
        return sessions as Session[];
    }

    throw new Error(`Le format de "${SESSION_PATH}" corresponds pas à un fichier JSON.`)
}

// ajoute une session aux sessions en supprimant les sessions expirées
function insert(session: Session) {
    const sessions = read();
    for(const i in sessions) {
        if(sessions[i].createdAt + TOKEN_EXPIRATION < Date.now()) {
            sessions.splice(parseInt(i), 1)
        }
    }
    sessions.push(session);

    writeFileSync(SESSION_PATH, JSON.stringify(sessions));
}