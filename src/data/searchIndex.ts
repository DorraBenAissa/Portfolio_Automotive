import { theoreticalConcepts } from './theoreticalConcepts'
import { manufacturerAnalyses } from './manufacturers'
import { experts } from './experts'
import { vehicleCommands } from './commands'
import { personas } from './personas'
import { drivingScenarios } from './workflows'
import { hypotheses } from './hypotheses'

export interface SearchEntry {
  id: string
  title: string
  category: string
  to: string
  keywords: string
}

const pages: SearchEntry[] = [
  { id: 'page-recherche', title: 'Recherche — vue d’ensemble', category: 'Page', to: '/recherche', keywords: 'explorer analyser conceptualiser évaluer réaliser démarche' },
  { id: 'page-cadre', title: 'Cadre théorique', category: 'Page', to: '/recherche/cadre-theorique', keywords: 'simplicité complexité simplexité cognition perception' },
  { id: 'page-methodo', title: 'Méthodologie', category: 'Page', to: '/recherche/methodologie', keywords: 'triangulation questionnaire entretiens benchmark' },
  { id: 'page-evolution', title: 'Évolution historique', category: 'Page', to: '/encyclopedie/evolution', keywords: 'tableaux de bord 1898 2026 périodes frise' },
  { id: 'page-comparaison', title: 'Comparaison constructeurs', category: 'Page', to: '/encyclopedie/comparaison', keywords: 'tesla mercedes renault porsche byd nio' },
  { id: 'page-resultats', title: 'Résultats conducteurs', category: 'Page', to: '/recherche/resultats-conducteurs', keywords: 'questionnaire statistiques 84.6% urgence' },
  { id: 'page-experts', title: 'Paroles d’experts', category: 'Page', to: '/recherche/experts', keywords: 'entretiens ux ihm charge cognitive tactile' },
  { id: 'page-discussion', title: 'Discussion', category: 'Page', to: '/recherche/discussion', keywords: 'confrontation conclusions' },
  { id: 'page-hypotheses', title: 'Hypothèses et validation', category: 'Page', to: '/recherche/hypotheses', keywords: 'validée statut' },
  { id: 'page-principes', title: 'Principes de conception', category: 'Page', to: '/interface-adaptative/principes', keywords: 'hiérarchisation charge cognitive commandes physiques adaptation' },
  { id: 'page-commandes', title: 'Référentiel des commandes', category: 'Page', to: '/interface-adaptative/commandes', keywords: 'criticité clignotants warning klaxon' },
  { id: 'page-scenarios', title: 'Scénarios adaptatifs', category: 'Page', to: '/interface-adaptative/scenarios', keywords: 'simulateur ville autoroute pluie nuit urgence stationnement storyboard' },
  { id: 'page-personas', title: 'Personas', category: 'Page', to: '/interface-adaptative/personas', keywords: 'conducteur profil' },
  { id: 'page-prototype', title: 'Prototype', category: 'Page', to: '/interface-adaptative/prototype', keywords: 'architecture écrans démonstration' },
  { id: 'page-evaluation', title: 'Évaluation critique', category: 'Page', to: '/interface-adaptative/evaluation', keywords: 'forces limites perspectives' },
  { id: 'page-these', title: 'Du mémoire à la thèse', category: 'Page', to: '/projet-these/evolution', keywords: 'cifra doctorat valeo partenariat' },
  { id: 'page-contributions', title: 'Contributions personnelles', category: 'Page', to: '/contributions', keywords: 'chronologie réalisations' },
  { id: 'page-dashboard', title: 'Dashboard recherche', category: 'Page', to: '/dashboard-recherche', keywords: 'métriques avancement' },
  { id: 'page-ethique', title: 'Éthique et transparence', category: 'Page', to: '/ethique-et-transparence', keywords: 'anonymisation consentement limites' },
]

const conceptEntries: SearchEntry[] = theoreticalConcepts.map((c) => ({
  id: `concept-${c.id}`,
  title: c.term,
  category: 'Concept',
  to: '/recherche/cadre-theorique',
  keywords: c.term,
}))

const manufacturerEntries: SearchEntry[] = manufacturerAnalyses.map((m) => ({
  id: `constructeur-${m.id}`,
  title: m.name,
  category: 'Constructeur',
  to: '/encyclopedie/comparaison',
  keywords: `${m.name} ${m.points.join(' ')}`,
}))

const expertEntries: SearchEntry[] = experts.map((e) => ({
  id: `expert-${e.id}`,
  title: e.displayLabel,
  category: 'Expert',
  to: '/recherche/experts',
  keywords: `${e.displayLabel} ${e.domain}`,
}))

const commandEntries: SearchEntry[] = vehicleCommands.map((c) => ({
  id: `commande-${c.id}`,
  title: c.name,
  category: 'Commande',
  to: '/interface-adaptative/commandes',
  keywords: `${c.name} ${c.category} niveau ${c.criticality}`,
}))

const personaEntries: SearchEntry[] = personas.map((p) => ({
  id: `persona-${p.id}`,
  title: p.name,
  category: 'Persona',
  to: '/interface-adaptative/personas',
  keywords: `${p.name} ${p.profile}`,
}))

const scenarioEntries: SearchEntry[] = drivingScenarios.map((s) => ({
  id: `scenario-${s.id}`,
  title: s.label,
  category: 'Scénario',
  to: '/interface-adaptative/scenarios',
  keywords: `${s.label} ${s.priorityInfo.join(' ')}`,
}))

const hypothesisEntries: SearchEntry[] = hypotheses.map((h) => ({
  id: `hypothese-${h.id}`,
  title: h.label,
  category: 'Hypothèse',
  to: '/recherche/hypotheses',
  keywords: `${h.label} ${h.status}`,
}))

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...conceptEntries,
  ...manufacturerEntries,
  ...expertEntries,
  ...commandEntries,
  ...personaEntries,
  ...scenarioEntries,
  ...hypothesisEntries,
]

export function searchSite(query: string, category?: string): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return searchIndex
    .filter((e) => !category || category === 'Tout' || e.category === category)
    .filter((e) => `${e.title} ${e.keywords}`.toLowerCase().includes(q))
    .slice(0, 20)
}

export const searchCategories = [
  'Tout',
  'Page',
  'Concept',
  'Constructeur',
  'Expert',
  'Commande',
  'Persona',
  'Scénario',
  'Hypothèse',
]
