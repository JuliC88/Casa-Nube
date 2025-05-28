import React from 'react'
import Header from '../components/Estaticos/Header'
import Footer from '../components/Estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = ({ cart, productos, cargando, agregarCarrito, quitarProducto }) => {
  return (
    <>
      <Header quitarProducto={quitarProducto} cartItems={cart} />
      <main>
        <h1>Bienvenidos a Casa Nube</h1>
        <h2>La calidad que buscás en un solo lugar</h2>

        {
          cargando ? <img src={loading} alt='loading' /> :
            <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        }

      </main>
      <Footer />
    </>
  )
}

export default Home