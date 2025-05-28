import React from 'react'
import Header from '../components/Estaticos/Header'
import Footer from '../components/Estaticos/Footer'

const Contacto = ({cart, quitarProducto}) => {
  return (
    <>
      <Header quitarProducto={quitarProducto} cartItems={cart}/>
      <h1>Contacto</h1>
      <Footer/>
    </>
  )
}

export default Contacto