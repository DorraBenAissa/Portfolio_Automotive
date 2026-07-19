export interface MethodologyStep {
  id: string
  label: string
  order: number
  description: string
}

export interface ResearchPhase {
  id: string
  order: number
  name: string
  question: string
  items: string[]
}

export interface WorkflowStep {
  id: string
  label: string
  description: string
}

export interface DrivingScenario {
  id: string
  mode: string
  label: string
  priorityInfo: string[]
  reducedInfo: string[]
  systemActions?: string[]
  driverControl: string
}

export interface EvaluationCriterion {
  id: string
  category: 'force' | 'limite' | 'perspective'
  label: string
}
