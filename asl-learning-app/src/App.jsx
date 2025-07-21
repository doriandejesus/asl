import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Fingerspelling from './pages/Fingerspelling'
import './App.css'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fingerspelling" element={<Fingerspelling />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
