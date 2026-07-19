import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { RecherchePage } from './pages/recherche/RecherchePage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<RecherchePage />} />
      </Route>
    </Routes>
  )
}

export default App
