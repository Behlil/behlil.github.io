import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

import './App.css'
import Experience from './Pages/Experience'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
