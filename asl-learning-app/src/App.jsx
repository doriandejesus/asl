import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
