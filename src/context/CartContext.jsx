import { createContext, useState, useEffect } from "react";
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
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
        <CartContext.Provider 
        value={{
            cart, productos, cargando, error, handleAddToCart,
            handleDeleteFromCart
        }}>
            {children}
        </CartContext.Provider>

    )
}