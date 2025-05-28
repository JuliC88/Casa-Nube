import React from 'react'
import Header from '../components/Estaticos/Header'
import Footer from '../components/Estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Galeria = ({ cart, productos, cargando, agregarCarrito, quitarProducto}) => {
  return (
    <>
      <Header quitarProducto={quitarProducto} cartItems={cart}/>
        <h1>Te mostramos todos nuestros productos</h1>

        {
          cargando ? <img src={loading} alt='loading' /> :
            <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        }
      <Footer />
    </>
  )
}

export default Galeria