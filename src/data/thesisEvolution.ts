export interface MethodologyStep {
  id: string
  order: number
  title: string
  subtitle: string
  points: string[]
}

export const thesisMemoireQuestion =
  'Dans quelle mesure la simplexité dans les interfaces automobiles permet-elle une expérience fluide, compréhensible et sécurisée ?'

export const memoireObjective =
  'Comprendre les interfaces automobiles actuelles, identifier les problèmes et proposer un concept UX adaptatif fondé sur la simplexité.'

export const memoireMethodologySteps: MethodologyStep[] = [
  {
    id: 'explorer',
    order: 1,
    title: 'Explorer',
    subtitle: 'Recherche bibliographique',
    points: ['Interfaces auto et évolution historique', 'Simplexité et expérience utilisateur', 'Charge cognitive et sécurité'],
  },
  {
    id: 'analyser',
    order: 2,
    title: 'Analyser',
    subtitle: 'Benchmark des constructeurs',
    points: ['Tesla', 'Renault', 'Mercedes-Benz', 'Mazda', 'Porsche', 'Constructeurs chinois'],
  },
  {
    id: 'conceptualiser',
    order: 3,
    title: 'Conceptualiser',
    subtitle: 'Enquêtes utilisateurs & entretiens experts',
    points: ['Questionnaire (conducteurs)', 'Entretiens semi-directifs (experts UX/IHM, ergonomes, ingénieurs)'],
  },
  {
    id: 'evaluer',
    order: 4,
    title: 'Évaluer',
    subtitle: 'Analyse des résultats et validation des hypothèses',
    points: ['Triangulation des données', 'Validation des 3 hypothèses', 'Identification des besoins clés'],
  },
  {
    id: 'realiser',
    order: 5,
    title: 'Réaliser',
    subtitle: 'Proposition UX',
    points: ['Principes de conception', 'Interface adaptative (concept)', 'Scénarios d’utilisation'],
  },
]

export const thesisMemoireResults = [
  'Les interfaces actuelles cherchent à simplifier l’accès mais la charge cognitive reste élevée.',
  'La simplicité visuelle ne garantit pas la simplicité d’usage.',
  'Les stratégies varient selon les constructeurs (minimalisme, immersion, équilibre, IA…).',
  '4 principes clés identifiés : réduction de la charge cognitive, hiérarchisation dynamique, conservation des commandes physiques essentielles, adaptation contextuelle et cognitive.',
  'Proposition d’une interface adaptative basée sur la simplexité.',
]

export const memoireLimitsList = [
  'Échantillon limité (conducteurs et experts)',
  'Focus sur le tableau de bord / interfaces principales',
  'Analyse centrée sur quelques constructeurs (Renault, Tesla, etc.)',
  'Pas d’expérimentation approfondie en contexte réel',
  'Concept UX non évalué de manière systématique',
]

export const thesisMemoireLimit =
  'Le mémoire identifie et illustre les principes, mais ne formalise pas encore un modèle scientifique complet ni une plateforme industrialisable.'

export const memoireConclusion =
  'La simplexité permet d’organiser la complexité pour créer des interfaces plus fluides, compréhensibles et sécurisées. Vers des interfaces plus adaptatives, contextuelles et personnalisées.'

export const scientificContinuity =
  'Le mémoire constitue la phase exploratoire. La thèse transforme les constats en cadre méthodologique évalué et validé scientifiquement et industriellement.'

export const simplexityThread =
  'Organiser intelligemment la complexité pour améliorer la compréhension, réduire la charge cognitive et préserver le contrôle et la sécurité du conducteur.'

export const thesisObjective =
  'Concevoir, expérimenter et évaluer un cadre méthodologique d’aide à la conception des HMI automobiles fondé sur la simplexité, destiné aux professionnels de l’UX et de l’IHM.'

export const thesisMethodologySteps: MethodologyStep[] = [
  {
    id: 'observer',
    order: 1,
    title: 'Observer',
    subtitle: 'État de l’art approfondi',
    points: ['HMI, ADAS, SDV, IA, multimodalité', 'Ergonomie, cognition, communication', 'Méthodes de conception existantes'],
  },
  {
    id: 'caracteriser',
    order: 2,
    title: 'Caractériser',
    subtitle: 'Caractérisation systématique de la complexité',
    points: ['Types d’informations', 'Niveaux de criticité', 'Contextes de conduite', 'Modalités d’interaction', 'Niveaux de contrôle humain/machine'],
  },
  {
    id: 'modeliser',
    order: 3,
    title: 'Modéliser',
    subtitle: 'Modélisation de l’orchestration informationnelle',
    points: ['Modèle de classification', 'Relations contexte-information-modalité', 'Modèle de décision (criticité, temporalité, contrôle)'],
  },
  {
    id: 'concevoir',
    order: 4,
    title: 'Concevoir',
    subtitle: 'Construction du cadre méthodologique',
    points: ['Méthode pas à pas', 'Matrice d’orchestration', 'Outils / grilles de conception'],
  },
  {
    id: 'experimenter',
    order: 5,
    title: 'Expérimenter',
    subtitle: 'Prototypage & expérimentation',
    points: ['Prototypes d’HMI (variantes)', 'Scénarios en simulateur et/ou véhicules', 'Tests utilisateurs en conditions contrôlées'],
  },
  {
    id: 'valider',
    order: 6,
    title: 'Valider',
    subtitle: 'Évaluation du cadre et des HMI',
    points: ['Professionnels (cohérence, efficacité, traçabilité, adoption)', 'Conducteurs (charge cognitive, performance, sécurité, confiance)', 'Itérations'],
  },
]

export const thesisDeliverables = [
  'Matrice d’orchestration contextuelle des interactions',
  'Processus de conception pas à pas',
  'Grilles, cartes et critères de conception (opérationnels)',
  'Protocole d’évaluation pour conducteurs et professionnels',
  'Guide méthodologique et recommandations pour l’industrie',
]

export interface DoctoralHypothesis {
  id: string
  label: string
  formulation: string
}

// Hypothèses proposées pour la thèse — à titre d'exemple, non encore testées.
export const doctoralHypotheses: DoctoralHypothesis[] = [
  {
    id: 'doctoral-h1',
    label: 'H1',
    formulation: 'Une organisation contextuelle fondée sur la criticité et la temporalité améliore la compréhension et réduit la charge cognitive.',
  },
  {
    id: 'doctoral-h2',
    label: 'H2',
    formulation: 'La distribution multimodale adaptée à la criticité réduit les conflits attentionnels et améliore l’efficacité des interactions.',
  },
  {
    id: 'doctoral-h3',
    label: 'H3',
    formulation: 'Une adaptation explicable, prévisible et réversible renforce le sentiment de contrôle et la confiance du conducteur.',
  },
  {
    id: 'doctoral-h4',
    label: 'H4',
    formulation: 'L’utilisation d’un cadre méthodologique structuré améliore la cohérence et la traçabilité des décisions de conception.',
  },
]

export const thesisExpectedImpacts = [
  'Sécurité accrue et meilleure maîtrise du véhicule',
  'Réduction de la charge cognitive et du stress',
  'Expérience utilisateur plus fluide, intuitive et agréable',
  'Aide concrète aux équipes UX/IHM et aux industriels',
  'Conception durable et évolutive des interfaces',
]

export const industryBenefits = [
  'Décisions de conception plus justifiées et traçables',
  'Réduction du time-to-market grâce à une méthode partagée',
  'Interfaces cohérentes entre marques, modèles et marchés',
  'Adaptation aux évolutions technologiques (SDV, IA, automatisation)',
  'Conformité aux exigences de sécurité et aux attentes des utilisateurs',
]

export const thesisEvolutionSteps = [
  'Mémoire exploratoire',
  'Vide identifié',
  'Modèle théorique',
  'Plateforme d’orchestration',
  'Prototype',
  'Tests utilisateurs',
  'Validation scientifique',
  'Application industrielle',
]

export const collaborationInterests = [
  'Interface homme-machine',
  'Cockpit',
  'Affichage',
  'Systèmes d’aide',
  'Expérience conducteur',
  'Logiciel embarqué',
  'Intelligence artificielle',
  'Sécurité',
  'Facteurs humains',
  'Validation UX',
  'Recherche CIFRE',
]

export const collaborationDisclaimer =
  'Recherche envisagée en thèse CIFRE, rattachée au laboratoire LabSIC (Université Sorbonne Paris Nord). Aucun partenariat officiel n’est annoncé à ce stade. Cette section présente une proposition de collaboration.'

export const contributionsChronology = [
  'Origine du sujet',
  'Mémoire',
  'Terrain',
  'Résultats',
  'Prototype',
  'Projet doctoral',
  'Partenariat industriel recherché',
]

export const contributionsList = [
  'Choix et construction du sujet',
  'Revue théorique',
  'Définition de l’approche de simplexité automobile',
  'Analyse historique',
  'Constitution du corpus',
  'Comparaison des constructeurs',
  'Questionnaire',
  'Entretiens',
  'Analyse des données',
  'Synthèse',
  'Schémas',
  'Matrices',
  'Recommandations',
  'Personas',
  'Scénarios',
  'Concept d’interface adaptative',
  'Prototype',
  'Projet doctoral',
  'Conception du portfolio',
]
