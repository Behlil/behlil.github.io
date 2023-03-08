import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, Link, BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
