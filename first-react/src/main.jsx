import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OnChange  from './OnChange.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />      
    {/* <OnChange/> */}

  </StrictMode>,
)
