import React, { useContext } from 'react'
import Header from '../components/Estaticos/Header'
import Footer from '../components/Estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Home = ({ agregarCarrito }) => {
  const {cargando} = useContext(CartContext)
  return (
    <>
      <Header />
      <main>
        <h1>Bienvenidos a Casa Nube</h1>
        <h2>La calidad que buscás en un solo lugar</h2>

        {
          cargando ? <img src={loading} alt='loading' /> :
            <ProductList/>
        }

      </main>
      <Footer />
    </>
  )
}

export default Home