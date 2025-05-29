import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
