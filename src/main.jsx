import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DemoPage from './pages/DemoPage.jsx'
import MobileDemoPage from './pages/MobileDemoPage.jsx'
import SimpleMobilePage from './pages/SimpleMobilePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/mobile" element={<MobileDemoPage />} />
        <Route path="/simple" element={<SimpleMobilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
