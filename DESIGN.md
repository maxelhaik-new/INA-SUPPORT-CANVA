---
name: Scientific Swiss Minimal
description: High-precision editorial presentation system inspired by Swiss graphic design, typographic duotones, and scientific research decks.
colors:
  primary: "#111111"
  neutral-bg: "#E8E8E4"
  surface: "#FFFFFF"
  surface-card: "#FAFAF8"
  surface-sage: "#E5ECE6"
  surface-dark: "#141414"
  text-primary: "#111111"
  text-muted: "#888884"
  text-inverse: "#F6F5F2"
  border: "#E4E4E0"
  border-dark: "#2C2C2C"
typography:
  display:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "'DM Mono', monospace"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  prompt:
    fontFamily: "'DM Mono', monospace"
    fontSize: "1.25rem"
    fontStyle: "italic"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  card: "16px"
  pill: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
---

# Design System: Scientific Swiss Minimal

## Overview

**Creative North Star: "The Architectural Lab Deck"**

The visual language is rooted in international Swiss typography, mathematical layout clarity, and modern research artifacts. It balances crisp hairlines (1px), obsidian typography on white surfaces, pill-shaped navigation anchors, and dedicated typographic treatment for prompts.

---

## Règles Strictes de Formatage des Prompts

1. **Typographie 100% Monospace & Italique** :
   - Tous les prompts, consignes de requêtes pour l'IA et textes destinés à l'outil doivent impérativement être affichés en police monospace (`var(--font-mono)` : DM Mono), avec le style italique (`fontStyle: 'italic'`).
2. **Zéro Guillemets (« » ou " ")** :
   - Ne **jamais** inclure de guillemets autour ou à l'intérieur des prompts affichés. Le prompt doit apparaître dans sa forme brute et épurée.
3. **Périmètre d'application** :
   - Les exemples de prompts complets (*Avant* / *Après* sur la Slide 08).
   - Les consignes de requêtes pour l'IA (*Demandez-lui un chiffre* sur la Slide 09).
   - Les exemples et rétroactions cités pour l'outil dans la méthode (*un pitch de 5 lignes...*, *Plus court*, *moins publicitaire* sur la Slide 07).

---

## Colors

- **Obsidian Carbon** (`#111111`) : Texte principal, titrages forts, fonds d'accent.
- **Pure White Surface** (`#FFFFFF`) : Fond de la slide.
- **Card Neutral Surface** (`#FAFAF8`) : Surface douce des cartes intérieures.
- **Sage Card Surface** (`#E5ECE6`) : Surface sauge pâle pour cartes positives ("Il fait bien").
- **Hairline Border** (`#E4E4E0`) : Filets de structure 1px et séparateurs internes de puces.
- **Muted Stone** (`#888884`) : Texte secondaire, métadonnées, sous-titres duotone.
- **Deep Velvet Black** (`#141414`) : Fond contrasté des slides de section et cartes "Après".

---

## Typography

- **Police Principale** : `DM Sans` (300, 400, 500, 700, 800)
- **Police Technique & Prompts** : `DM Mono` (300, 400, 500)
- **Titres Duotone** : Première partie en gras obsidian (`#111111` 800), seconde partie en gris léger (`#888884` 300) au sein du même titre.
- **Prompts** : Monospace brut, italique, sans guillemets, taille généreuse et lisible.

---

## Cartes & Énumérations

- **Séparation Subtile** : Pour les cartes avec énumération, le texte est découpé en puces distinctes séparées par une fine hairline de 1px (`#E4E4E0` ou `rgba(17,17,17,0.1)`).
- **Rayon de Courbure** : `14px` à `16px` pour les cartes de contenu, `9999px` pour les pills badges.
- **Animation de Cascade** : Entrée ordonnée (Titre → Carte 1 → Carte 2...) avec temporisation marquée (`staggerChildren: 0.38s`, durée `0.85s`, ease-out soyeux).

---

## Échelle typographique projecteur (slides 1280×720)

Support projeté : aucun texte minuscule sur le contenu. Plancher et hiérarchie obligatoires :

| Rôle | Taille | Poids |
| :--- | :--- | :--- |
| Titre de slide (duotone) | 3rem | 800 / 300 |
| Titre de carte | 1.7–2.1rem | 700 |
| Corps / puces / prompts | ≥ 1.2rem (idéal 1.4–1.6rem) | 400–500 |
| Label mono (badge, sur-titre) | 0.85–0.9rem, uppercase | 700 |

- Plancher absolu : 1.1rem pour tout contenu lisible ; les labels mono ne descendent jamais sous 0.85rem.
- Contenu principal des cartes en `--c-ink` ; `--c-muted` réservé aux labels et métadonnées.
- Pas de grand vide négatif dans une carte : augmenter la taille du texte avant d'ajouter des éléments. Les cartes remplissent la hauteur utile (`flex: 1`).
- Vérifier le débordement : `scrollHeight` de la slide ≤ 720px.

## Prompts cliquables

- Toute carte contenant un prompt utilise `components/PromptCard.jsx` : un clic copie le prompt (sans guillemets) dans le presse-papier.
- Seule indication : icône de copie discrète en haut à droite (devient une coche 1,5 s). Aucun texte, aucune modale.
