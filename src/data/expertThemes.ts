import type { ExpertThemeSynthesis, ExpertMatrixRow } from '../types/expert'

export const expertThemes: ExpertThemeSynthesis[] = [
  {
    theme: 'La charge cognitive',
    questions: [
      'À partir de quel moment une interface devient-elle trop dense ?',
      'Quelle quantité d’informations peut être affichée pendant la conduite ?',
      'Comment réduire l’effort mental sans masquer les informations nécessaires ?',
      'Comment adapter l’interface à la charge cognitive du conducteur ?',
    ],
    synthesis:
      'Les experts soulignent que l’accumulation d’informations et la multiplication des niveaux de navigation peuvent augmenter l’effort mental. La réduction de la charge cognitive dépend moins du nombre brut d’éléments que de leur hiérarchie, de leur pertinence et du contexte dans lequel ils apparaissent.',
    points: [],
  },
  {
    theme: 'Le tactile',
    questions: [],
    synthesis:
      'Le tactile n’est pas considéré comme négatif en lui-même, mais il ne doit pas devenir l’unique modalité d’interaction pour toutes les fonctions.',
    points: [
      'Avantages du tactile',
      'Flexibilité',
      'Personnalisation',
      'Centralisation',
      'Limites en conduite',
      'Absence de retour matériel',
      'Nécessité de regarder l’écran',
      'Navigation dans des sous-menus',
      'Risque de distraction',
    ],
  },
  {
    theme: 'Les commandes physiques',
    questions: [],
    synthesis: '',
    points: [
      'Importance de la mémoire musculaire',
      'Du repérage tactile',
      'De l’action réflexe',
      'Du retour immédiat',
      'De l’utilisation sans quitter la route des yeux',
      'De la permanence spatiale',
    ],
  },
  {
    theme: 'La sécurité',
    questions: [],
    synthesis: 'La sécurité est présentée comme critère supérieur à :',
    points: [
      'L’esthétique',
      'L’effet technologique',
      'Le minimalisme',
      'La nouveauté',
      'La personnalisation',
    ],
  },
  {
    theme: 'La hiérarchisation de l’information',
    questions: [],
    synthesis: 'Nécessité de distinguer :',
    points: [
      'Informations critiques',
      'Informations importantes',
      'Informations contextuelles',
      'Informations secondaires',
      'Informations de confort',
      'Informations accessibles à l’arrêt uniquement',
    ],
  },
  {
    theme: 'L’adaptation contextuelle',
    questions: [],
    synthesis: '',
    points: [
      'Adaptation à la ville',
      'Adaptation à l’autoroute',
      'Adaptation à la météo',
      'Adaptation au jour et à la nuit',
      'Adaptation à la circulation',
      'Adaptation à l’état du conducteur',
      'Adaptation à l’urgence',
    ],
  },
  {
    theme: 'La confiance et le contrôle humain',
    questions: [],
    synthesis: '',
    points: [
      'Besoin d’explication',
      'Prévisibilité du système',
      'Possibilité de désactivation',
      'Confirmation des actions sensibles',
      'Absence de changements brutaux',
      'Contrôle manuel',
      'Gestion des erreurs de l’intelligence artificielle',
    ],
  },
  {
    theme: 'L’avenir de l’UX automobile',
    questions: [],
    synthesis: '',
    points: [
      'Multimodalité',
      'Intelligence artificielle',
      'Personnalisation',
      'Adaptation',
      'Anticipation',
      'Systèmes définis par logiciel',
      'Coopération humain-machine',
      'Maintien de repères stables',
    ],
  },
]

// Structure prête pour intégration ; opinions non encore vérifiées auprès des experts.
// Aucune opinion n'est inventée : toutes les cellules restent en brouillon.
export const expertMatrix: ExpertMatrixRow[] = [
  'Tactile',
  'Commandes physiques',
  'Charge cognitive',
  'Sécurité',
  'Personnalisation',
  'IA',
  'Adaptation',
  'Voix',
  'HUD',
  'Contrôle humain',
].map((theme) => ({
  theme,
  expertA: 'à compléter depuis le mémoire',
  expertB: 'à compléter depuis le mémoire',
  expertC: 'à compléter depuis le mémoire',
  convergence: 'à compléter depuis le mémoire',
  divergence: 'à compléter depuis le mémoire',
  uxImplication: 'à compléter depuis le mémoire',
  status: 'brouillon' as const,
}))
