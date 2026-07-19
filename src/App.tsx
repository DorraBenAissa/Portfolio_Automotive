import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { RecherchePage } from './pages/recherche/RecherchePage'
import { CadreTheorique } from './pages/recherche/CadreTheorique'
import { Methodologie } from './pages/recherche/Methodologie'
import { EvolutionHistorique } from './pages/encyclopedie/EvolutionHistorique'
import { Comparaison } from './pages/encyclopedie/Comparaison'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<RecherchePage />} />
        <Route path="/recherche/cadre-theorique" element={<CadreTheorique />} />
        <Route path="/recherche/methodologie" element={<Methodologie />} />
        <Route path="/encyclopedie/evolution" element={<EvolutionHistorique />} />
        <Route path="/encyclopedie/comparaison" element={<Comparaison />} />
      </Route>
    </Routes>
  )
}

export default App
