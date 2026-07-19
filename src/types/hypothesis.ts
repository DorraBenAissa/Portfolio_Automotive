export type HypothesisStatus =
  | 'validée'
  | 'partiellement validée'
  | 'non validée'
  | 'à approfondir'

export interface Hypothesis {
  id: string
  label: string
  formulation: string
  indicators: string[]
  dataUsed: string[]
  result: string
  status: HypothesisStatus
  limits: string[]
  perspectives: string[]
}
