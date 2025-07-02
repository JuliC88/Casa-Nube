import React, { useContext } from 'react';
import Header from '../components/Estaticos/Header';
import Footer from '../components/Estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { productosFiltrados, cargando, handleAddToCart } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className="home-container">
        <h1>🛍️ Bienvenidos a Casa Nube</h1>
        <h2>Todo lo que buscás en un solo lugar</h2>

        <p>
          Casa Nube cuenta con una gran variedad de productos 
          para que puedas comprar todo lo que necesitás, sin moverte de tu casa.
        </p>

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

export default Home;