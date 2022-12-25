import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GiftList } from './components/GiftList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GiftList />
    </>
  )
}

export default App
