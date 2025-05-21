import fs from "fs"

interface Session {
    token: string,
    createdAt: number
}

// Les tokens expirent après 4 heures.
export const TOKEN_EXPIRATION = 1000 * 60 * 60 * 4;
const SESSION_PATH = './data/sessions.json';

const sessions = {
    // renvoie les sessions
    read(): Session[] {
        const buffer = fs.readFileSync(SESSION_PATH,  { encoding: 'utf-8' });
        const sessions = JSON.parse(buffer);
        if(typeof sessions === 'object' && sessions instanceof Array) {
            return sessions as Session[];
        }
    
        throw new Error(`Le format de "${SESSION_PATH}" corresponds pas à un fichier JSON.`)
    },
    // ajoute une session aux sessions en supprimant les sessions expirées
    insert(session: Session) {
        const sessions = this.read();
        for(const i in sessions) {
            if(sessions[i].createdAt + TOKEN_EXPIRATION < Date.now()) {
                sessions.splice(parseInt(i), 1)
            }
        }
        sessions.push(session);
        
        this.write(sessions)
    },
    write(sessions: Session[]) {
        fs.writeFileSync(SESSION_PATH, JSON.stringify(sessions))
    }
}

// génère un token et le stocke
export function generateToken(): string {
    const token = Math.floor(Math.random() * 9E18).toString(36);

    // On stocke la session
    sessions.insert({
        token,
        createdAt: Date.now()
    })

    return token
}

// vérifie l'authenticité d'un token
export function authentificateToken(token: string): boolean {
    console.log('authentificating ', token)
    for(const session of sessions.read()) {
        if(session.token === token && session.createdAt + TOKEN_EXPIRATION >= Date.now()) {
            return true;
        }
    }
    return false;
}

export function lister_sessions(): Session[] {
    return sessions.read()
}
export function supprimer_session(token: string) {
    const tokens = sessions.read();
    const i = tokens.findIndex(session => session.token === token);
    if(i < 0) return
    tokens.splice(i, 1)
    sessions.write(tokens)
}