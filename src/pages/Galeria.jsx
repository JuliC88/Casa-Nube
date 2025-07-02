import React, { useContext } from 'react';
import Header from '../components/Estaticos/Header';
import Footer from '../components/Estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';

const Galeria = () => {
  const {
    productosFiltrados,
    cart,
    cargando,
    handleAddToCart,
    handleDeleteFromCart
  } = useContext(CartContext);

  return (
    <>
      <Header cartItems={cart} quitarProducto={handleDeleteFromCart} />

      <main className="galeria-container">
        <h1>🏷️ Descubrí todos nuestros productos</h1>
        <p>Explorá nuestra galería de artículos pensados para cada rincón de tu hogar.</p>

        {
          cargando
            ? <img src={loading} alt="Cargando..." />
            : <ProductList productos={productosFiltrados} agregarCarrito={handleAddToCart} />
        }
      </main>

      <Footer />
    </>
  );
};

export default Galeria;