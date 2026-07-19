import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { RecherchePage } from './pages/recherche/RecherchePage'
import { CadreTheorique } from './pages/recherche/CadreTheorique'
import { Methodologie } from './pages/recherche/Methodologie'
import { EvolutionHistorique } from './pages/encyclopedie/EvolutionHistorique'
import { Comparaison } from './pages/encyclopedie/Comparaison'
import { ResultatsConducteurs } from './pages/recherche/ResultatsConducteurs'
import { Experts } from './pages/recherche/Experts'
import { Discussion } from './pages/recherche/Discussion'
import { Hypotheses } from './pages/recherche/Hypotheses'

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
        <Route path="/recherche/resultats-conducteurs" element={<ResultatsConducteurs />} />
        <Route path="/recherche/experts" element={<Experts />} />
        <Route path="/recherche/discussion" element={<Discussion />} />
        <Route path="/recherche/hypotheses" element={<Hypotheses />} />
      </Route>
    </Routes>
  )
}

export default App
