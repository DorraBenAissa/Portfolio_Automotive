import type { DrivingScenario, WorkflowStep } from '../types/methodology'

export const storyboardSequence: WorkflowStep[] = [
  { id: 'situation', label: 'Situation', description: 'Contexte de conduite rencontré par le conducteur.' },
  { id: 'detection', label: 'Détection', description: 'Le véhicule détecte les conditions du contexte.' },
  { id: 'adaptation', label: 'Adaptation', description: 'Le système ajuste la hiérarchie et l’affichage des informations.' },
  { id: 'interaction', label: 'Interaction', description: 'Le conducteur interagit avec l’interface adaptée.' },
  { id: 'decision', label: 'Décision', description: 'Le conducteur ou le système propose une action.' },
  { id: 'resultat', label: 'Résultat', description: 'Bénéfice UX obtenu et risques éventuels identifiés.' },
]

export const drivingScenarios: DrivingScenario[] = [
  {
    id: 'ville',
    mode: 'ville',
    label: 'Mode ville',
    priorityInfo: ['Vitesse', 'Limitations', 'Piétons', 'Cyclistes', 'Intersections', 'Feux', 'Navigation proche', 'Obstacles', 'Zones de danger'],
    reducedInfo: ['Informations multimédias secondaires', 'Statistiques non urgentes', 'Réglages complexes'],
    driverControl: 'Le conducteur garde la main sur toutes les décisions ; le système hiérarchise l’affichage.',
  },
  {
    id: 'autoroute',
    mode: 'autoroute',
    label: 'Mode autoroute',
    priorityInfo: ['Vitesse', 'Limitation', 'Distance de sécurité', 'Trajectoire', 'Navigation', 'Autonomie', 'Prochaine aire', 'Aides à la conduite', 'Vigilance'],
    reducedInfo: [],
    driverControl: 'Le conducteur garde la main sur toutes les décisions critiques.',
  },
  {
    id: 'pluie-forte',
    mode: 'pluie-forte',
    label: 'Mode pluie forte',
    priorityInfo: ['Distance de sécurité', 'Alertes de visibilité'],
    reducedInfo: ['Contenus secondaires'],
    systemActions: [
      'Détecter la pluie',
      'Activer ou proposer les essuie-glaces',
      'Ajuster leur vitesse',
      'Améliorer le contraste',
      'Afficher la distance de sécurité',
      'Réduire les contenus secondaires',
      'Augmenter la visibilité des alertes',
    ],
    driverControl: 'Le conducteur doit pouvoir reprendre la main immédiatement.',
  },
  {
    id: 'nuit',
    mode: 'nuit',
    label: 'Mode nuit',
    priorityInfo: ['Alertes essentielles', 'Signes de fatigue'],
    reducedInfo: ['Luminosité et contenus secondaires'],
    systemActions: [
      'Adapter la luminosité',
      'Réduire l’éblouissement',
      'Renforcer les contrastes',
      'Simplifier l’affichage',
      'Surveiller les signes de fatigue',
      'Proposer une pause',
    ],
    driverControl: 'Le conducteur reste décisionnaire de toute pause proposée.',
  },
  {
    id: 'embouteillage',
    mode: 'embouteillage',
    label: 'Mode embouteillage',
    priorityInfo: ['Distance', 'Déplacement du trafic', 'Temps estimé', 'Aides disponibles', 'Itinéraire alternatif'],
    reducedInfo: ['Alertes non nécessaires'],
    driverControl: 'Le conducteur choisit l’itinéraire proposé ou non.',
  },
  {
    id: 'stationnement',
    mode: 'stationnement',
    label: 'Mode stationnement',
    priorityInfo: ['Vue caméra', 'Capteurs', 'Environnement 360°', 'Commandes contextuelles', 'Assistance', 'Choix de place', 'Détails visuels'],
    reducedInfo: [],
    driverControl: 'Davantage d’informations sont autorisées à l’arrêt, sans enjeu de sécurité routière immédiat.',
  },
  {
    id: 'urgence',
    mode: 'urgence',
    label: 'Mode urgence',
    priorityInfo: ['Nature du danger', 'Action immédiate', 'Trajectoire de sécurité', 'Vitesse', 'Alertes essentielles', 'Possibilité de reprise en main'],
    reducedInfo: ['Multimédia', 'Personnalisation', 'Notifications', 'Données secondaires', 'Options non critiques'],
    driverControl:
      '84,6 % des répondants souhaitent masquer les informations secondaires en situation d’urgence.',
  },
]

export interface DrivingContext {
  roadType: 'ville' | 'autoroute'
  weather: 'sec' | 'pluie'
  lightLevel: 'jour' | 'nuit'
  trafficDensity: 'fluide' | 'dense'
  driverState: 'attentif' | 'fatigué'
  criticalityLevel: 'normal' | 'urgence'
}

export const defaultDrivingContext: DrivingContext = {
  roadType: 'ville',
  weather: 'sec',
  lightLevel: 'jour',
  trafficDensity: 'fluide',
  driverState: 'attentif',
  criticalityLevel: 'normal',
}
