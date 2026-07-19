export interface TimelinePeriod {
  id: string
  order: number
  label: string
  range: string
  characteristics: string[]
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'mecanique',
    order: 1,
    label: 'Période mécanique',
    range: '1898 – 1960',
    characteristics: [
      'Simplicité fonctionnelle',
      'Informations limitées',
      'Commandes directes',
      'Faible quantité de données',
      'Forte matérialité',
      'Repères simples',
    ],
  },
  {
    id: 'electromecanique',
    order: 2,
    label: 'Période électromécanique',
    range: '1960 – 1990',
    characteristics: [
      'Multiplication des fonctions',
      'Ajout de voyants',
      'Multiplication des boutons',
      'Amélioration du confort',
      'Complexification progressive',
    ],
  },
  {
    id: 'numerique-hybride',
    order: 3,
    label: 'Période numérique et hybride',
    range: '1990 – 2015',
    characteristics: [
      'Apparition des écrans',
      'Navigation',
      'Informatique embarquée',
      'Coexistence analogique-numérique',
      'Menus et sous-menus',
      'Personnalisation',
    ],
  },
  {
    id: 'contemporaine',
    order: 4,
    label: 'Période contemporaine',
    range: '2015 – 2026',
    characteristics: [
      'Grands écrans',
      'Connectivité',
      'Assistants vocaux',
      'Intelligence artificielle',
      'Aides à la conduite',
      'Affichage tête haute',
      'Disparition partielle des boutons',
      'Simplification visuelle',
      'Complexification possible de l’usage',
    ],
  },
]

export interface TimelineEntry {
  id: string
  periodId: string
  date: string | null
  vehicle: string | null
  imagePlaceholder: boolean
  technologies: string[]
  controlType: string | null
  digitalizationLevel: number | null
  visualComplexity: number | null
  usageComplexity: number | null
  uxLearnings: string | null
  status: 'confirmé' | 'à compléter depuis le mémoire'
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'entry-1',
    periodId: 'mecanique',
    date: '1946',
    vehicle: 'Renault 4CV',
    imagePlaceholder: true,
    technologies: ['Compteur de vitesse à aiguille', 'Compteur kilométrique', 'Indicateurs huile / eau / essence'],
    controlType: 'Commandes mécaniques et analogiques uniquement',
    digitalizationLevel: 0,
    visualComplexity: 1,
    usageComplexity: 1,
    uxLearnings:
      'Aucun bouton superflu : l’aiguille en mouvement continu permet de percevoir la position angulaire sans lecture consciente des chiffres, donc sans charge cognitive, par un simple coup d’œil — une ergonomie naturelle que les interfaces modernes peinent à retrouver (mémoire, p. 49).',
    status: 'confirmé',
  },
  {
    id: 'entry-2',
    periodId: 'electromecanique',
    date: '1965',
    vehicle: 'Renault 16',
    imagePlaceholder: true,
    technologies: ['Témoins lumineux', 'Molette de climatisation', 'Compte-tours', 'Jauges carburant / température'],
    controlType: 'Commandes physiques (molettes, boutons, cadrans analogiques)',
    digitalizationLevel: 0,
    visualComplexity: 2,
    usageComplexity: 2,
    uxLearnings:
      'Introduit la séparation fonctionnelle entre la zone de lecture conducteur (vitesse, régime, carburant) et la zone de commandes de confort (température, son, ventilation) — une organisation qui sera ensuite normalisée dans toute l’industrie automobile (mémoire, p. 50).',
    status: 'confirmé',
  },
  {
    id: 'entry-3',
    periodId: 'numerique-hybride',
    date: '2001',
    vehicle: 'Renault Laguna II',
    imagePlaceholder: true,
    technologies: ['Carte mains libres (sans clé physique)', 'Affichage tête haute (HUD)', 'Navigation GPS'],
    controlType: 'Mixte : commandes physiques et premiers écrans numériques',
    digitalizationLevel: 3,
    visualComplexity: 3,
    usageComplexity: 4,
    uxLearnings:
      'Première voiture au monde à supprimer la clé physique, remplacée par une carte mains libres — un jalon dans la numérisation de l’expérience conducteur, dans une génération de modèles Renault classée « Complexe » par le mémoire (mémoire, p. 52).',
    status: 'confirmé',
  },
  {
    id: 'entry-4',
    periodId: 'contemporaine',
    date: '2022',
    vehicle: 'Renault Mégane E-Tech',
    imagePlaceholder: true,
    technologies: ['Écran tactile centralisé', 'Mises à jour OTA', 'Interface OpenR Link'],
    controlType: 'Tout tactile : grand écran centralisé, zéro bouton physique',
    digitalizationLevel: 5,
    visualComplexity: 2,
    usageComplexity: 4,
    uxLearnings:
      'Qualifiée de « faussement simple » par le mémoire : la complexité visuelle est évaluée « Simple » (interface épurée, écran noir élégant) mais la complexité en usage est jugée « Complexe » (menus profonds, fonctions cachées, suppression totale des repères physiques) — l’exemple central de la thèse de la simplexité non atteinte (mémoire, p. 53).',
    status: 'confirmé',
  },
]

export const disappearedTransformedElements = [
  'Boutons physiques supprimés puis réintroduits',
  'Compteurs analogiques remplacés par des écrans',
  'Commandes regroupées dans un écran central',
  'Commandes vocales ajoutées',
  'Affichage tête haute développé',
  'Molettes et raccourcis physiques maintenus par certains constructeurs',
]
