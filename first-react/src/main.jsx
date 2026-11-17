import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OnChange  from './OnChange.jsx'
import TodolistApp from './TodolistApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />       
    {/* <OnChange/> */}
  {/* <TodolistApp/> */}

  </StrictMode>,
)
