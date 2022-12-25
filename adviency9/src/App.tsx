import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PresentList } from './components/PresentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PresentList />
    </div>
  )
}

export default App
