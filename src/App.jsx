import { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import NotFound from './pages/Notfound';
import { CartContext } from './context/CartContext';

function App() {
  const { } = useContext(CartContext)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/AcercaDe' element={<AcercaDe />} />

        <Route path='/Productos' element={<Galeria />} />

        <Route path='/Productos/:id' element={<DetallesProductos/>} />

        <Route path='/Contacto' element={<Contacto />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;