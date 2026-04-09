// Apply saved theme before render to prevent flash
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
