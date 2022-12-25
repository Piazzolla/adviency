import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GiftsProvider } from './context/gifts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GiftsProvider>
      <App />
    </GiftsProvider>
  </React.StrictMode>,
)
