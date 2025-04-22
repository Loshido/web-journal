import { check } from "./users";
import { authentificateToken, generateToken, TOKEN_EXPIRATION } from "./sessions";

// Renvoie un jeton de connexion si les identifiants sont correctes.
export function login(identifiant: string, pass: string): string {
    const identifiantsCorrectes = check(identifiant, pass);
    if(!identifiantsCorrectes) return ''
    
    return generateToken();
}
// Vérifie l'authenticité d'un jeton
export const authentificate = authentificateToken;
export { TOKEN_EXPIRATION }