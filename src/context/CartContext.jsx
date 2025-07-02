import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const savedCart = localStorage.getItem("cart");
    const [cart, setCart] = useState(() =>
        savedCart ? JSON.parse(savedCart) : []
    );

    useEffect(() => {
        console.log("🛒 CARRITO:", cart);
    }, [cart]);

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [isAuthenticated, setIsAuth] = useState(false);

    useEffect(() => {
        fetch('/data/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error ${res.status}`);
                }
                return res.json();
            })
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const productosFiltrados = productos.filter((producto) =>
        producto?.title?.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleAddToCart = (product, cantidad) => {
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === product.id);

            if (productInCart) {
                toast.success(`Producto actualizado: ${product.title}`);
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + cantidad }
                        : item
                );
            } else {
                toast.success(`¡Producto agregado: ${product.title}!`);
                return [...prevCart, { ...product, quantity: cantidad }];
            }
        });
    };

    const handleDeleteFromCart = (product) => {
        toast.error(`Producto eliminado: ${product.title}`);
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

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        toast.info("¡Compra finalizada!");
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                productos,
                cargando,
                error,
                isAuthenticated,
                setIsAuth,
                busqueda,
                setBusqueda,
                productosFiltrados,
                handleAddToCart,
                handleDeleteFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};