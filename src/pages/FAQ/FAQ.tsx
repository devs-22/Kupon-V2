import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const FAQ = () => {
  return (
    <div className="FAQ__root">
      <header>
        <Header />
      </header>
      <div className="FAQ__topic">
        <img src={require('../../assets/Polypodium.svg').default} alt="" className='hand'/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default FAQ