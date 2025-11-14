import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Fingerspelling from './pages/Fingerspelling'
import Dictionary from './pages/Dictionary'
import './App.css'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fingerspelling" element={<Fingerspelling />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
