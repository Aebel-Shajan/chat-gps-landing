import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, Navigate, HashRouter, } from 'react-router-dom'
import './index.css'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
