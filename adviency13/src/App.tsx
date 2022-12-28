import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages/Home'
import { GiftProvider } from './context/gift'
import { UiProvider } from './context/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UiProvider>
        <GiftProvider>
          <Home />
        </GiftProvider>
      </UiProvider>
    </>
  )
}

export default App
