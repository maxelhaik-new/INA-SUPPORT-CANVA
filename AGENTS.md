# Directives & Règles Projet (AGENTS.md)

## Règles Absolues
1. **Zéro superflu & Contenu pédagogique ciblé** :
   - Interdiction d'ajouter des faux labels marketing (ex. `COMPANY NAME`, `TEAM NAME`, `TODAY'S DATE`, `FEATURE NAME`).
   - Le contenu doit rester pédagogique, clair, humain et centré sur les besoins réels de formation (reformulation libre autorisée sans obligation de mot pour mot).
   - Pas d'artifices marketing ou de marqueurs de langage IA, privilégier une langue directe et naturelle.

2. **Règles de formatage des Prompts (100% systématique)** :
   - **Typographie des prompts** : 100% des prompts et textes destinés aux outils IA (ex. Claude) doivent être affichés en police monospace (`var(--font-mono)` : DM Mono), avec style italique (`fontStyle: 'italic'`).
   - **Zéro guillemets** : Ne JAMAIS inclure de guillemets (« » ou " ") autour ou à l'intérieur des prompts affichés. Le prompt doit être affiché sous forme brute / pure.
   - **Exemples concernés** :
     - Les prompts d'exemples (ex. `Fais-moi un pitch pour mon doc.`, `Tu es chargé de développement...`).
     - Les consignes de requêtes pour l'IA dans les exercices (ex. `Combien de séries documentaires de brand content ont été diffusées en France l'an dernier ?`, `D'où vient ce chiffre ? Donne-moi le lien exact.`).
     - Les exemples de prompts ou rétroactions cités dans la méthode (ex. `un pitch de 5 lignes pour une série de 4 × 26 min`, `Plus court`, `moins publicitaire`).

3. **Architecture des composants & Versionnage (Zéro page monolithique)** :
   - Zéro fichier géant ou page monolithique.
   - Les déclinaisons de projet sont organisées en dossiers de versions (ex. `V1/`, `V2/`, `V3/`).
   - Au sein de chaque version, chaque slide et composant d'UI est isolé dans son fichier dédié dans `components/`.
   - Le point d'entrée principal (`index.html` / `main.js`) ne sert qu'à assembler ces composants.

4. **Système de Design & Tokens CSS** :
   - Tous les styles reposent sur des variables CSS déclarées dans `components/tokens.css` (couleurs, polices, rayons de courbure, bordures, espacements).
   - Aucun style critique codé en dur (hardcoded). Permettre un changement de thème instantané en modifiant les variables.
   - S'inspirer fidèlement de l'essence du « design cible » des maquettes de recherche (fond blanc, cadre sobre, typographie suisse percutante, filets noirs 1px, pas de débordement).
