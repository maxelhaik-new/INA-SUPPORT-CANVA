import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';
import PromptCard from './PromptCard';

/**
 * Slide 08 — Atelier 1 : Dossier Word & Budget/Planning Excel
 * Cascade : Titre -> Carte Prompt 1 -> Carte Prompt 2 -> Bandeau Réflexe Qualité
 */
const Slide08_Workshop1 = () => {
  return (
    <Slide>
      <SlideHeader
        badge="ATELIER CLAUDE · 30 MIN"
        meta="INA CAMPUS"
        titleBold="Du brief aux fichiers Word"
        titleLight="et Excel exploitables"
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '1.5rem' }}>
        {/* Grille 2 colonnes pour les 2 prompts */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Carte Prompt 1 */}
          <PromptCard text={`Tu es responsable de communication à l'INA. À partir du brief des Rencontres Créatives 2027, rédige une note de cadrage de projet percutante et structurée : contexte, 3 objectifs stratégiques, public cible, concept éditorial et facteurs clés de succès. Produis ce document sous forme de fichier Word (.docx) avec page de garde soignée et typographie hiérarchisée.`}
            style={{
              backgroundColor: '#FAFAF8',
              border: '1px solid var(--c-rule)',
              borderRadius: '16px',
              padding: '0.72rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.625rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
                PROMPT 1 · FICHIER WORD (.DOCX)
              </span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-ink)' }}>
                Note de cadrage
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--c-ink)',
                lineHeight: 1.55,
                margin: 'auto 0',
              }}
            >
              Tu es responsable de communication à l'INA. À partir du brief des Rencontres Créatives 2027, rédige une note de cadrage de projet percutante et structurée : contexte, 3 objectifs stratégiques, public cible, concept éditorial et facteurs clés de succès. Produis ce document sous forme de fichier Word (.docx) avec page de garde soignée et typographie hiérarchisée.
            </p>
          </PromptCard>

          {/* Carte Prompt 2 */}
          <PromptCard text={`À partir de ce projet d'événement, génère un classeur Excel (.xlsx) comprenant deux onglets. Onglet 1 : Rétroplanning des actions de communication sur 6 mois (jalons, livrables, responsable). Onglet 2 : Budget prévisionnel par poste (création visuelle, relations presse, campagne digitale, captation) avec colonnes Quantité, Prix unitaire, Total et formules automatiques de somme. Laisse les montants unitaires à compléter.`}
            style={{
              backgroundColor: '#FAFAF8',
              border: '1px solid var(--c-rule)',
              borderRadius: '16px',
              padding: '0.72rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.625rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
                PROMPT 2 · CLASSEUR EXCEL (.XLSX)
              </span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-ink)' }}>
                Rétroplanning & Budget prévisionnel
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--c-ink)',
                lineHeight: 1.55,
                margin: 'auto 0',
              }}
            >
              À partir de ce projet d'événement, génère un classeur Excel (.xlsx) comprenant deux onglets. Onglet 1 : Rétroplanning des actions de communication sur 6 mois (jalons, livrables, responsable). Onglet 2 : Budget prévisionnel par poste (création visuelle, relations presse, campagne digitale, captation) avec colonnes Quantité, Prix unitaire, Total et formules automatiques de somme. Laisse les montants unitaires à compléter.
            </p>
          </PromptCard>
        </div>

        {/* Bandeau qualité sombre */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'var(--c-dark)',
            borderRadius: '12px',
            padding: '0.46rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#F6F5F2',
              flexShrink: 0,
            }}
          >
            RÉFLEXE QUALITÉ
          </span>
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'rgba(246,245,242,0.92)',
              lineHeight: 1.4,
              textAlign: 'right',
            }}
          >
            Téléchargez immédiatement les fichiers produits. Vérifiez la rigueur des formules dans Excel et éliminez toute formule toute faite dans Word.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide08_Workshop1;
