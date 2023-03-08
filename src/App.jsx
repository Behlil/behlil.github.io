import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Sidebar from './components/Navbar'
import Header from './components/Header'

import './App.css'
import HousePriceCompetitionProject from './components/HousePriceCompetitionProject'
import Experience from './Pages/Experience'
import Recommendations from './Pages/Recommendations'
import Services from './Pages/Services'
import Navbar from './components/Navbar'
import ScrollRestoration from './components/ScrollRestoration'

function App() {
  return (
    <div className="app">
      <ScrollRestoration />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' >
            <Route index element={<Projects />} />
            <Route path='HousePriceCompetition' caseSensitive={false} element={<HousePriceCompetitionProject />} />
          </Route>
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/services' element={<Services />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
