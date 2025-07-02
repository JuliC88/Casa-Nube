import { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import NotFound from './pages/Notfound';
import { CartContext } from './context/CartContext';
import DetalleProductos from './components/DetalleProductos';
import { RutasProtegidas } from './rutas/RutasProtegidas';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AcercaDe' element={<AcercaDe />} />
      <Route path='/Productos' element={<Galeria />} />
      <Route path='/Productos/:id' element={<DetalleProductos />} />
      <Route path='/Contacto' element={<Contacto />} />
      <Route
        path='/admin'
        element={
          <RutasProtegidas isAuthenticated={isAuthenticated}>
            <Admin />
          </RutasProtegidas>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;