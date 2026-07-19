export type PersonaOrigin = 'mémoire' | 'extension démonstration'

export interface Persona {
  id: string
  name: string
  origin: PersonaOrigin
  profile: string
  experience: string
  context: string
  goals: string[]
  difficulties: string[]
  techRelationship: string
  needs: string[]
  risks: string[]
  expectations: string[]
  scenario: string
  recommendations: string[]
}
