import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LangWeb from './LangWeb.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangWeb />
  </StrictMode>,
)
