import './App.css'
import { GiftList } from './components/GiftList'
import { GiftProvider } from './context/gift'
import { Home } from './pages/Home'

function App() {

  return (
    <GiftProvider>
      <Home />
    </GiftProvider>
  )
}

export default App
