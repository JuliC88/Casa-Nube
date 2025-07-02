import React, { useContext } from 'react';
import './styleCart.css';
import { CartContext } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const {
        cart,
        handleDeleteFromCart,
        clearCart
    } = useContext(CartContext);

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>

            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <>
                        <ul className='cart-item'>
                            {cart.map((item) => (
                                <li key={item.id} style={{ color: 'black' }}>
                                    <strong>{item.title}</strong><br />
                                    Cantidad: {item.cantidad}<br />
                                    Precio unitario: ${item.price}<br />
                                    Subtotal: ${item.cantidad * item.price}
                                    <button onClick={() => handleDeleteFromCart(item)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-footer">
                            <p style={{ color: 'blue' }}>
                                Total: ${cart.reduce(
                                    (total, item) => total + (item.price * item.cantidad), 0
                                )}
                            </p>
                            <button
                                style={{ color: 'black' }}
                                onClick={clearCart}
                                className="btnCheckout"
                            >
                                Finalizar compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;