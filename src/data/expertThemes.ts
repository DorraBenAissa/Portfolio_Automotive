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
    synthesis:
      'Les experts considèrent que certaines fonctions doivent rester accessibles via des commandes physiques afin de limiter les distractions visuelles et de garantir une meilleure sécurité — notamment les commandes de conduite, la climatisation et les fonctions critiques nécessitant un accès rapide.',
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
    synthesis:
      'Les experts identifient l’intelligence artificielle comme un levier majeur d’évolution des interfaces automobiles : ils envisagent des systèmes capables d’adapter dynamiquement les informations affichées selon le contexte de conduite, l’environnement ou l’état du conducteur, plutôt qu’une interface fixe identique en permanence.',
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
    synthesis:
      'Les experts s’accordent sur une évolution continue des interfaces avec les véhicules autonomes, les assistants intelligents et de nouvelles formes d’interaction homme-machine. À mesure que la conduite s’automatise, la question se déplace de « comment je contrôle le véhicule » à « comment je vis à son bord », l’habitacle devenant progressivement un espace de vie et d’expérience à part entière.',
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

// Cellules renseignées uniquement lorsqu'une citation d'expert identifiée le permet
// (mémoire p. 77-89) ; les thèmes non couverts par des propos attribués par expert
// restent "à compléter depuis le mémoire" plutôt qu'estimés.
const placeholder = 'à compléter depuis le mémoire'

export const expertMatrix: ExpertMatrixRow[] = [
  {
    theme: 'Tactile',
    expertA: 'Le tout tactile n’est pas compatible avec les enjeux de sécurité routière ; on met trop de temps à quitter la route des yeux.',
    expertB: placeholder,
    expertC: placeholder,
    convergence: placeholder,
    divergence: placeholder,
    uxImplication: placeholder,
    status: 'brouillon',
  },
  {
    theme: "Automobile et smartphone",
    expertA: "\u00c0 v\u00e9rifier dans le m\u00e9moire - formulation attribu\u00e9e : \u00ab L\u2019interface n\u2019est pas un telephone avec des roues. \u00bb",
    expertB: placeholder,
    expertC: placeholder,
    convergence: placeholder,
    divergence: placeholder,
    uxImplication: "Distinguer les usages mobiles de l\u2019interface de conduite et r\u00e9server le tableau de bord aux informations utiles, contextuelles et s\u00e9curitaires.",
    status: "brouillon",
  },
  {
    theme: 'Commandes physiques',
    expertA: 'Les commandes de conduite et la climatisation doivent rester physiques.',
    expertB: 'Les fonctions critiques doivent rester accessibles rapidement.',
    expertC: 'Certaines commandes doivent conserver un retour physique.',
    convergence: 'Consensus sur le maintien de commandes physiques pour les fonctions critiques et liées à la sécurité.',
    divergence: 'Expert A adopte la position la plus tranchée, opposant frontalement le tout-tactile et la sécurité routière.',
    uxImplication: 'Conserver des commandes physiques pour les fonctions vitales et fréquentes ; réserver le tactile aux fonctions secondaires.',
    status: 'vérifié',
  },
  {
    theme: 'Charge cognitive',
    expertA: 'L’humain peine déjà à traiter la quantité d’informations de la route ; plus on ajoute de fonctions, plus on ajoute du risque au risque.',
    expertB: 'L’IA doit permettre de simplifier l’expérience utilisateur et non ajouter une couche supplémentaire de complexité.',
    expertC: 'Une surcharge d’informations peut rapidement nuire à l’expérience utilisateur ; le conducteur doit rester concentré sur sa conduite.',
    convergence: 'Les trois experts s’accordent : la charge cognitive est l’enjeu central des entretiens, et la simplicité d’usage doit devenir une priorité de conception.',
    divergence: placeholder,
    uxImplication: 'Réduire le nombre de fonctions actives simultanément et limiter les niveaux de navigation pendant la conduite.',
    status: 'vérifié',
  },
  {
    theme: 'Sécurité',
    expertA: 'Toutes les fonctions liées à la conduite, à l’enveloppe du véhicule et à son niveau de confort devraient rester physiques : le conducteur doit pouvoir les actionner sans regarder.',
    expertB: placeholder,
    expertC: placeholder,
    convergence: placeholder,
    divergence: placeholder,
    uxImplication: placeholder,
    status: 'brouillon',
  },
  { theme: 'Personnalisation', expertA: placeholder, expertB: placeholder, expertC: placeholder, convergence: placeholder, divergence: placeholder, uxImplication: placeholder, status: 'brouillon' },
  {
    theme: 'IA',
    expertA: placeholder,
    expertB: 'L’interface va évoluer avec l’IA et l’écosystème utilisateur ; les informations devront s’adapter à la situation de conduite.',
    expertC: 'Une interface adaptative améliorerait l’expérience utilisateur ; l’interface pourrait évoluer selon le niveau de stress du conducteur.',
    convergence: 'Experts B et C voient l’IA comme un levier de simplification et d’adaptation, pas comme une fin en soi.',
    divergence: 'Expert A ne s’exprime pas directement sur l’IA dans les extraits disponibles, davantage focalisé sur le maintien du physique.',
    uxImplication: 'Concevoir l’IA comme un moyen de réduire la charge cognitive (affichage contextuel) plutôt que comme une fonctionnalité supplémentaire à afficher.',
    status: 'vérifié',
  },
  {
    theme: 'Adaptation',
    expertA: placeholder,
    expertB: 'Les informations devront s’adapter au contexte de conduite ; l’avenir est dans les interfaces contextuelles.',
    expertC: 'Les informations prioritaires doivent apparaître en premier et au bon moment.',
    convergence: 'Experts B et C partagent une vision d’interfaces capables de s’ajuster automatiquement au contexte et à l’état du conducteur.',
    divergence: placeholder,
    uxImplication: 'Prioriser dynamiquement l’affichage selon la situation de conduite (ville, autoroute, urgence, état du conducteur).',
    status: 'vérifié',
  },
  { theme: 'Voix', expertA: placeholder, expertB: placeholder, expertC: placeholder, convergence: placeholder, divergence: placeholder, uxImplication: placeholder, status: 'brouillon' },
  { theme: 'HUD', expertA: placeholder, expertB: placeholder, expertC: placeholder, convergence: placeholder, divergence: placeholder, uxImplication: placeholder, status: 'brouillon' },
  { theme: 'Contrôle humain', expertA: placeholder, expertB: placeholder, expertC: placeholder, convergence: placeholder, divergence: placeholder, uxImplication: placeholder, status: 'brouillon' },
]
