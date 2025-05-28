import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import NotFound from './pages/Notfound';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
  console.log("CARRITO:", cart);
}, [cart]);

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch(error => {
        console.log('Error', error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product, cantidad) => {
  setCart(prevCart => {
    const productInCart = prevCart.find(item => item.id === product.id);

    if (productInCart) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: cantidad }];
    }
  });
};

  const handleDeleteFromCart = (product) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Home
            quitarProducto={handleDeleteFromCart}
            agregarCarrito={handleAddToCart}
            cart={cart}
            productos={productos}
            cargando={cargando}
          />
        } />
        <Route path='/AcercaDe' element={
          <AcercaDe quitarProducto={handleDeleteFromCart} cart={cart} />
        } />
        <Route path='/Productos' element={
          <Galeria
            quitarProducto={handleDeleteFromCart}
            agregarCarrito={handleAddToCart}
            cart={cart}
            productos={productos}
            cargando={cargando}
          />
        } />
        <Route path='/Contacto' element={
          <Contacto quitarProducto={handleDeleteFromCart} cart={cart} />
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;