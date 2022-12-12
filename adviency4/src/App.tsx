import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PresentsPage } from './pages/PresentsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PresentsPage />
    </>
  )
}

export default App
