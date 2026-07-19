export interface Citation {
  id: string
  expertId: string
  theme: string
  text: string | null
  verified: boolean
  approvedForPublication: boolean
  sourcePage: number | null
}
