/**
 * Composant Graphique : Étoile / Astérisque géométrique (8 branches)
 * Correspond exactement au motif épuré des maquettes cibles (Capture 1, 3, 6).
 */
export function renderStarburst(size = 180, strokeWidth = 1.5, color = 'var(--text-primary)') {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="starburst-graphic" style="flex-shrink: 0;">
      <!-- Ligne Verticale -->
      <line x1="50" y1="2" x2="50" y2="98" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      <!-- Ligne Horizontale -->
      <line x1="2" y1="50" x2="98" y2="50" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      <!-- Diagonale 1 -->
      <line x1="16" y1="16" x2="84" y2="84" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      <!-- Diagonale 2 -->
      <line x1="16" y1="84" x2="84" y2="16" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
    </svg>
  `;
}
