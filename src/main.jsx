import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import FAQs from './pages/FAQs.jsx'
import Services from './pages/Services.jsx'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Routes>
  </Router>,
  
)
