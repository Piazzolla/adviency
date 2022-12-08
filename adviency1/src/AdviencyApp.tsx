
import './App.css'
import { FrontPage } from './pages/FrontPage'
import { NextUIProvider } from '@nextui-org/react'


function AdviencyApp() {

  return (
    <>
      <NextUIProvider>
        <FrontPage />
      </NextUIProvider>
    </>
  )
}

export default AdviencyApp
