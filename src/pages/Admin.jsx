import React, { useState, useEffect } from "react";
import '../admin.css';
import FormularioProducto from "../components/FormularioProducto";
import Header from "../components/Estaticos/Header";
import Footer from "../components/Estaticos/Footer";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({ id: null, title: "", price: "", description: "", image: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://6861e6b396f0cc4e34b7b6e4.mockapi.io/product")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://6861e6b396f0cc4e34b7b6e4.mockapi.io/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });

            if (!respuesta.ok) {
                throw new Error('Error al agregar producto');
            }

            const data = await respuesta.json();
            setProductos([...productos, data]);
            alert('Producto agregado correctamente');
            setOpen(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const res = await fetch(`https://6861e6b396f0cc4e34b7b6e4.mockapi.io/product/${producto.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            });
            const actualizado = await res.json();
            setProductos(productos.map(p => p.id === actualizado.id ? actualizado : p));
            alert("Producto actualizado correctamente");
            setOpen(false);
        } catch (err) {
            console.error("Error al actualizar producto:", err);
        }
    };

    const eliminarProducto = async (id) => {
        if (window.confirm("¿Seguro que querés eliminar este producto?")) {
            try {
                await fetch(`https://6861e6b396f0cc4e34b7b6e4.mockapi.io/product/${id}`, {
                    method: 'DELETE'
                });
                setProductos(productos.filter(p => p.id !== id));
            } catch (error) {
                console.error("Error al eliminar producto:", error);
            }
        }
    };

    const editarProducto = (producto) => {
        setForm(producto);
        setOpen(true);
    };

    return (
        <>
            <Header />
            <div className="container">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <nav>
                            <ul className="nav">
                                <li className="navItem">
                                    <button className="navButton">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </button>
                                </li>
                                <li className="navItem">
                                    <a href="/admin">Admin</a>
                                </li>
                            </ul>
                        </nav>

                        <h1 className="title">Panel Administrativo</h1>

                        <ul className="list">
                            {productos.map((product) => (
                                <li key={product.id} className="listItem">
                                    <img
                                        src={product.image || "https://via.placeholder.com/150"}
                                        alt={product.title}
                                        className="listItemImage"
                                    />
                                    <span>{product.title}</span>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <div>
                                        <button className="editButton" onClick={() => editarProducto(product)}>Editar</button>
                                        <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <button onClick={() => {
                    setForm({ id: null, title: '', price: '', description: '', image: '' });
                    setOpen(true);
                }}>Agregar producto nuevo</button>

                {open && <FormularioProducto 
                    form={form} 
                    setForm={setForm} 
                    onAgregar={agregarProducto} 
                    onActualizar={actualizarProducto} 
                    setOpen={setOpen} 
                />}
            </div>
            <Footer />
        </>
    );
};

export default Admin;