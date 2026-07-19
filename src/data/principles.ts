export interface DesignPrinciple {
  id: string
  order: number
  title: string
  points: string[]
}

export const designPrinciples: DesignPrinciple[] = [
  {
    id: 'reduction-charge-cognitive',
    order: 1,
    title: 'Réduction de la charge cognitive',
    points: [
      'Afficher les informations nécessaires',
      'Masquer ou déplacer les éléments secondaires',
      'Réduire les niveaux de navigation pendant la conduite',
      'Éviter les alertes concurrentes',
      'Limiter les changements inutiles',
    ],
  },
  {
    id: 'hierarchisation-dynamique',
    order: 2,
    title: 'Hiérarchisation dynamique des informations',
    points: [
      'Organiser selon le contexte',
      'Prioriser les informations de sécurité',
      'Adapter les contenus',
      'Présenter le bon niveau de détail',
      'Différencier conduite et arrêt',
    ],
  },
  {
    id: 'commandes-physiques-essentielles',
    order: 3,
    title: 'Conservation des commandes physiques essentielles',
    points: [
      'Maintenir les actions réflexes',
      'Permettre une utilisation sans regard',
      'Exploiter la mémoire musculaire',
      'Assurer un retour tactile',
      'Conserver une localisation stable',
    ],
  },
  {
    id: 'adaptation-contextuelle-cognitive',
    order: 4,
    title: 'Adaptation contextuelle et cognitive',
    points: [
      'Contexte routier',
      'Environnement',
      'Météo',
      'Luminosité',
      'Trafic',
      'État du conducteur',
      'Niveau de criticité',
      'Habitudes',
      'Préférences',
    ],
  },
]
