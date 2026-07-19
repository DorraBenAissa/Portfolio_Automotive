import type { ResearchPhase } from '../types/methodology'

export const researchPhases: ResearchPhase[] = [
  {
    id: 'explorer',
    order: 1,
    name: 'Explorer',
    question: 'Quel cadre théorique permet de comprendre la relation entre le conducteur et l’interface ?',
    items: [
      'Revue de littérature',
      'Concept de simplexité',
      'Cognition',
      'Perception',
      'Interaction humain-machine',
      'Sécurité',
      'Ergonomie cognitive',
      'Étude du secteur automobile',
    ],
  },
  {
    id: 'analyser',
    order: 2,
    name: 'Analyser',
    question: 'Comment les interfaces ont-elles évolué, et que révèlent le terrain et les experts ?',
    items: [
      'Évolution historique des tableaux de bord',
      'Analyse Renault',
      'Comparaison entre constructeurs',
      'Questionnaire auprès des conducteurs',
      'Entretiens avec les experts',
      'Identification des problèmes UX',
    ],
  },
  {
    id: 'conceptualiser',
    order: 3,
    name: 'Conceptualiser',
    question: 'Quels principes de conception découlent de la théorie et du terrain ?',
    items: [
      'Principes de simplexité automobile',
      'Hiérarchisation des informations',
      'Équilibre physique-numérique',
      'Adaptation contextuelle',
      'Scénarios d’usage',
      'Personas',
    ],
  },
  {
    id: 'evaluer',
    order: 4,
    name: 'Évaluer',
    question: 'Les hypothèses de recherche sont-elles confirmées par le croisement des données ?',
    items: [
      'Confrontation des résultats',
      'Validation des hypothèses',
      'Analyse critique',
      'Identification des forces et des limites',
      'Critères d’évaluation future',
    ],
  },
  {
    id: 'realiser',
    order: 5,
    name: 'Réaliser',
    question: 'Comment traduire les principes en une interface concrète et démontrable ?',
    items: [
      'Interface adaptative',
      'Modes ville, autoroute et urgence',
      'Workflows',
      'Architecture conceptuelle',
      'Prototype interactif',
      'Perspectives de développement',
    ],
  },
]

export const centralStatement =
  'Le projet ne cherche pas à supprimer la complexité technologique du véhicule, mais à l’organiser afin de la rendre compréhensible, utilisable et sécurisée pour le conducteur.'
