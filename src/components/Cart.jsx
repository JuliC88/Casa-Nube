import React from 'react';
import './styleCart.css';

const Cart = ({ cartItems, isOpen, onClose, quitarProducto }) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <ul className='cart-item'>
                        {cartItems.map((item) => (
                            <li key={item.id} style={{ color: 'black' }}>
                                <strong>{item.title}</strong><br />
                                Cantidad: {item.quantity}<br />
                                Precio unitario: ${item.price}<br />
                                Subtotal: ${item.quantity * item.price}
                                <button onClick={() => quitarProducto(item)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Cart;