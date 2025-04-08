// Ce fichier permet de configurer react-router pour avoir du SSR 
// et ainsi avec un véritable backend

import type { Config } from "@react-router/dev/config";

declare module "react-router" {
  interface Future {
    unstable_middleware: true;
  }
}

export default {
    // Ces paramètres permettent au serveur de compiler côté serveur
    ssr: true,
    future: {
        unstable_middleware: true
    }
} satisfies Config;
