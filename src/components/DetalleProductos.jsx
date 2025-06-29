import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Estaticos/Header'
import Footer from './Estaticos/Footer'
import { CartContext } from '../context/CartContext'

const DetalleProductos = () => {
    
    const { productos } = useContext(CartContext)
    const { id } = useParams()
    
    const products = productos.find(producto => producto.id == id)
    
    if (!products) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1 style={{ color: '#c00' }}> Detalle del Producto: {id}</h1>
                <p style={{ fontSize: '1.2rem' }}> Producto no encontrado</p>
            </div>
        )
    }

    return (
        <div>
            HASTA ACA
        </div>
    )
}

export default DetalleProductos