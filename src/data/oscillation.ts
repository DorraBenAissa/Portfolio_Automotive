// Illustration conceptuelle (non chiffrée) construite à partir des caractéristiques
// qualitatives décrites pour chaque période. Ce n'est pas une mesure empirique.
export interface OscillationPoint {
  period: string
  simpliciteFonctionnelle: number
  complexiteFonctionnelle: number
  simpliciteVisuelle: number
  complexiteUsage: number
}

export const oscillationData: OscillationPoint[] = [
  { period: 'Mécanique\n1898–1960', simpliciteFonctionnelle: 5, complexiteFonctionnelle: 1, simpliciteVisuelle: 5, complexiteUsage: 1 },
  { period: 'Électromécanique\n1960–1990', simpliciteFonctionnelle: 3, complexiteFonctionnelle: 3, simpliciteVisuelle: 3, complexiteUsage: 3 },
  { period: 'Numérique/hybride\n1990–2015', simpliciteFonctionnelle: 2, complexiteFonctionnelle: 4, simpliciteVisuelle: 3, complexiteUsage: 4 },
  { period: 'Contemporaine\n2015–2026', simpliciteFonctionnelle: 2, complexiteFonctionnelle: 5, simpliciteVisuelle: 4, complexiteUsage: 4 },
]
