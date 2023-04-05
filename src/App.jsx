import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import './App.css'
import Experience from './Pages/Experience'
import Services from './Pages/Services'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/services' element={<Services />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
