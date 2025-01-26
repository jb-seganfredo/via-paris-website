
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import mid from './public/mid.jpeg'

function App() {


  return (
    <>
 
      <Header />

      <Banner />

      <Sobre />

      <img src={mid} alt="mid" style={{ maxHeight: 600}} className='min-w-full'/>

      <Servicos />

      <Footer />
    </>
  )
}

export default App
