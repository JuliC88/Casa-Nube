import React, { useState, useContext } from 'react';
import Header from '../components/Estaticos/Header';
import Footer from '../components/Estaticos/Footer';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Login = () => {
    const { setIsAuth } = useContext(CartContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};
        if (!email) validationErrors.email = 'El email es requerido';
        if (!password) validationErrors.password = 'La clave es requerida';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('/data/users.json');
            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setErrors({ email: 'Credenciales inválidas' });
            } else {
                if (foundUser.role === 'admin') {
                    setIsAuth(true);
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            setErrors({
                email: 'Algo salió mal. Por favor, inténtalo más tarde.',
            });
        }
    };

    return (
        <>
            <Header />
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '400px',
                    margin: 'auto',
                    padding: '2rem',
                }}
            >
                {/* Campo Email */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label
                        htmlFor="formBasicEmail"
                        style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
                    >
                        Email
                    </label>
                    <input
                        id="formBasicEmail"
                        type="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                        }}
                    />
                    {errors.email && (
                        <div
                            style={{
                                color: 'red',
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            }}
                        >
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* Campo Password */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label
                        htmlFor="formBasicClave"
                        style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
                    >
                        Password
                    </label>
                    <input
                        id="formBasicClave"
                        type="password" // <-- CORREGIDO
                        placeholder="Ingrese su clave"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.clave ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                        }}
                    />
                    {errors.password && (
                        <div
                            style={{
                                color: 'red',
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            }}
                        >
                            {errors.password}
                        </div>
                    )}
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#728f8b',
                        color: 'white',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Iniciar sesión
                </button>
            </form>
            <Footer />
        </>
    );
};

export default Login;
