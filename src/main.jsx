import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CoffeePage from './CoffeePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeePage />
  </StrictMode>,
)
