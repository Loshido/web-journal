import { check } from "./users";
import { authentificateToken, generateToken } from "./sessions";

// Renvoie un jeton de connexion si les identifiants sont correctes.
export const login = (identifiant: string, pass: string): string => {
    const identifiantsCorrectes = check(identifiant, pass);
    if(!identifiantsCorrectes) return ''

    return generateToken();
}

// Vérifie qu'un jeton est valide.
export const authentificate = (token: string) => authentificateToken(token)