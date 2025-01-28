import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Produtos from './components/Produtos'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import mid from './public/mid.jpeg'
import social from './public/social.png'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <img src={mid} alt="mid" style={{ maxHeight: 600}} className='min-w-full' />
      <Servicos />
      <Produtos />

      {/* Imagem Social fixa no canto inferior direito */}
      <img
  src={social}
  alt="social"
  className="fixed bottom-24 right-4 max-w-14"
  style={{ maxHeight: '200px', zIndex: 10 }}
/>


      <Footer />
    </>
  )
}

export default App
