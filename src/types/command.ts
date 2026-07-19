export type CriticalityLevel = 1 | 2 | 3 | 4

export interface VehicleCommand {
  id: string
  name: string
  category: string
  criticality: CriticalityLevel
  criticalityLabel: string
  recommendedModality: string
  cognitiveJustification: string
  eyesFree: boolean
  frequency: string
  context: string
  automatable: boolean
  requiresHumanValidation: boolean
}

export interface CriticalityLevelInfo {
  level: CriticalityLevel
  title: string
  subtitle: string
  justifications: string[]
}
