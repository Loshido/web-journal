import { check } from "./users";
import { authentificateToken, generateToken } from "./sessions";

export default {
    // Renvoie un jeton de connexion si les identifiants sont correctes.
    login(identifiant: string, pass: string): string {
        const identifiantsCorrectes = check(identifiant, pass);
        if(!identifiantsCorrectes) return ''
    
        return generateToken();
    },
    // Vérifie l'authenticité d'un jeton
    authentificate: authentificateToken
}