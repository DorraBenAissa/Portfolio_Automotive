export type SurveyStatus = 'confirmé' | 'à compléter depuis le mémoire'
export type SurveyChartType = 'bar' | 'pie' | 'stat' | 'list'

export interface SurveyResult {
  id: string
  category: string
  question: string
  value: number | null
  unit: '%' | null
  status: SurveyStatus
  chartType: SurveyChartType
  note?: string
  options?: { label: string; value: number | null }[]
}
