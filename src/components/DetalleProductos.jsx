import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Estaticos/Header';
import Footer from './Estaticos/Footer';
import { CartContext } from '../context/CartContext';

const DetalleProductos = () => {
    const { productos } = useContext(CartContext);
    const { id } = useParams();

    const product = productos.find(producto => producto.id === Number(id));

    if (!product) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1 style={{ color: '#c00' }}>Detalle del Producto: {id}</h1>
                <p style={{ fontSize: '1.2rem' }}>Producto no encontrado</p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <section
                style={{
                    maxWidth: '500px',
                    margin: '2px auto',
                    padding: '2rem',
                    border: '1px solid #eee',
                    borderRadius: '12px',
                    boxShadow: '2px 2px 9px rgba(0,0,0,0.07)',
                    background: '#fff',
                }}
            >
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#728f8b'}}>
                    {product.title}
                </h1>

                {product.image && (
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: '100%',
                            maxHeight: '300px',
                            objectFit: 'cover',
                            borderRadius: '9px',
                            marginBottom: '1.5rem',
                        }}
                    />
                )}

                <p style={{ fontSize: '1rem', marginBottom: '1rem', color: '#555' }}>
                    {product.description}
                </p>

                <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#7a6060' }}>
                    Precio: ${product.price}
                </p>

                <details style={{ marginBottom: '1.5rem' }}>
                    <summary style={{ fontWeight: 'bold', color: '#333' }}>
                        Detalles del producto
                    </summary>
                    <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
                        <li>Marca: Acme</li>
                        <li>Categoría: {product.category}</li>
                        <li>SKU: {Number(product.id) + 1250}</li>
                        <li>
                            Fecha de lanzamiento:{' '}
                            {(new Date()).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </li>
                    </ul>
                </details>

                <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem' }}>
                    Stock: {product.rating?.count}
                </p>

                <Link
                    to="/"
                    style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: '#728f8b',
                        color: '#fff',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        marginTop: '1rem',
                    }}
                >
                    Volver a Home
                </Link>
            </section>
            <Footer />
        </>
    );
};

export default DetalleProductos;