import type { DrivingContext } from '../data/workflows'

export interface InterfaceState {
  priority: string[]
  secondary: string[]
  hidden: string[]
  modality: string
  proposedAutomations: string[]
  needsConfirmation: string[]
  explanations: string[]
}

/**
 * Démonstration front-end d'un moteur de règles contextuelles.
 * Aucune IA réelle : logique déterministe illustrant les principes de conception
 * (hiérarchisation dynamique, adaptation contextuelle, contrôle humain préservé).
 */
export function computeInterfaceState(context: DrivingContext): InterfaceState {
  if (context.criticalityLevel === 'urgence') {
    return {
      priority: ['Nature du danger', 'Action immédiate', 'Trajectoire de sécurité', 'Vitesse', 'Alertes essentielles'],
      secondary: [],
      hidden: ['Multimédia', 'Personnalisation', 'Notifications', 'Données secondaires', 'Options non critiques'],
      modality: 'Physique uniquement',
      proposedAutomations: [],
      needsConfirmation: ['Reprise en main immédiate disponible à tout instant'],
      explanations: [
        'Niveau de criticité : urgence — toutes les informations non essentielles sont masquées.',
        '84,6 % des répondants souhaitent ce masquage en situation d’urgence.',
      ],
    }
  }

  const priority = new Set<string>(['Vitesse'])
  const secondary = new Set<string>()
  const hidden = new Set<string>()
  const proposedAutomations = new Set<string>()
  const needsConfirmation = new Set<string>()
  const explanations: string[] = []
  let modality = 'Physique + tactile'

  if (context.roadType === 'ville') {
    ;['Limitations', 'Piétons', 'Cyclistes', 'Intersections', 'Feux', 'Navigation proche'].forEach((i) => priority.add(i))
    ;['Statistiques non urgentes', 'Réglages complexes'].forEach((i) => secondary.add(i))
    explanations.push('Contexte ville : priorité aux dangers proches (piétons, intersections).')
  } else {
    ;['Distance de sécurité', 'Trajectoire', 'Navigation', 'Autonomie', 'Prochaine aire'].forEach((i) => priority.add(i))
    proposedAutomations.add('Régulateur / limiteur de vitesse')
    explanations.push('Contexte autoroute : priorité à la trajectoire et à la distance de sécurité.')
  }

  if (context.weather === 'pluie') {
    priority.add('Distance de sécurité')
    priority.add('Alertes de visibilité')
    secondary.add('Contenus secondaires')
    proposedAutomations.add('Essuie-glaces (vitesse ajustée)')
    needsConfirmation.add('Activation des essuie-glaces automatiques')
    explanations.push('Pluie détectée : renforcement du contraste et de la distance de sécurité affichée.')
  }

  if (context.lightLevel === 'nuit') {
    secondary.add('Luminosité réduite des contenus secondaires')
    modality = 'Physique (priorité aux commandes sans regard)'
    explanations.push('Conditions nocturnes : luminosité et contrastes adaptés, affichage simplifié.')
    if (context.driverState === 'fatigué') {
      priority.add('Alerte de fatigue')
      needsConfirmation.add('Proposition de pause')
      explanations.push('Fatigue détectée de nuit : proposition de pause soumise au conducteur.')
    }
  }

  if (context.trafficDensity === 'dense') {
    priority.add('Distance au véhicule précédent')
    secondary.add('Alertes non nécessaires')
    proposedAutomations.add('Itinéraire alternatif')
    explanations.push('Trafic dense : réduction des alertes non nécessaires, itinéraire alternatif proposé.')
  }

  if (context.driverState === 'fatigué' && context.lightLevel !== 'nuit') {
    priority.add('Alerte de fatigue')
    needsConfirmation.add('Proposition de pause')
    explanations.push('Signes de fatigue détectés : surveillance renforcée et proposition de pause.')
  }

  ;['Multimédia avancé', 'Personnalisation', 'Applications', 'Services connectés']
    .filter((i) => !priority.has(i))
    .forEach((i) => hidden.add(i))

  return {
    priority: Array.from(priority),
    secondary: Array.from(secondary),
    hidden: Array.from(hidden),
    modality,
    proposedAutomations: Array.from(proposedAutomations),
    needsConfirmation: Array.from(needsConfirmation),
    explanations,
  }
}
