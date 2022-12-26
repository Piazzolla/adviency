import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages/Home'
import { GiftProvider } from './context/gift'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GiftProvider>
      <Home />
    </GiftProvider>
  )
}

export default App
