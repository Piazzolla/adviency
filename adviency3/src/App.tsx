import './App.css'
import { AdviencyPage } from './pages/AdviencyPage'
//import backgroundImage from ''


const containerStyle = {
  width: '100%',
  backgroundImage: `url(https://res.cloudinary.com/piazzolla/image/upload/v1670710739/samples/71a7dcdf-8735-4134-8271-c3afdb1ff4f6_cr_0.214.3004_ia9n3k.webp)`,
  backgroundSize: '100%',
  backgroundPosition: 'center center',
  // backgroundRepeat: 'repeat',
  height:'100vh',

}



function App() {

  return (
    <>
      <div className="container"
        style={containerStyle}
      >

        <AdviencyPage />
      </div>
    </>
  )
}

export default App
