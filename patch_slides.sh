# 1. Update Sections
echo "SLIDES.push(UI.section('01', 'Votre métier<br><em>& vos usages</em>', 'Formats, temps et a priori.'));" > V4/components/slides/S06_Section1.js
echo "SLIDES.push(UI.section('02', 'Prendre en main l\'IA<br><em>pour les projets du quotidien</em>', 'Les fondamentaux des prompts avec Copilot.'));" > V4/components/slides/S13_Section2.js
echo "SLIDES.push(UI.section('03', 'Itérer sur un projet<br><em>professionnel avec l\'IA</em>', 'De l\'analyse du brief à la note de cadrage.'));" > V4/components/slides/S17_Section3.js
echo "SLIDES.push(UI.section('04', 'Créer des visuels et<br><em>des documents mis en page</em>', 'Direction artistique, génération d\'images et présentation.'));" > V4/components/slides/S22_Section4.js
echo "SLIDES.push(UI.section('05', 'Pour aller<br><em>plus loin</em>', 'Atelier libre, autres usages et veille.'));" > V4/components/slides/S25_Section5.js

# 2. Update S04_Parcours.js (Un brief, quatre étapes -> Ce que nous allons créer)
sed -i '' 's/Un brief, <em>quatre étapes<\/em>/Ce que nous <em>allons créer<\/em>/g' V4/components/slides/S04_Parcours.js
# and also remove mentions of "quatre étapes" if any other place (top badge)
sed -i '' 's/Parcours/Livrables/' V4/components/slides/S04_Parcours.js

# 3. Remove "Étape X" from labels
sed -i '' 's/Étape 2 · Rédiger la note/Rédiger la note/' V4/components/slides/S23_NoteCadrage.js
sed -i '' 's/Étape 3 · Présenter/Présenter/' V4/components/slides/S24_SlidesFlow.js
sed -i '' 's/Étape 4 · Créer une série d'\''images/Créer une série d'\''images/' V4/components/slides/S27_CopilotImages.js
