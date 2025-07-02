import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isAuth, setAuth] = useState(false);
    const navigate = useNavigate();
    const { setCart } = useContext(CartContext);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true';
        if (isAuthenticated) {
            setAuth(true);
            navigate('/admin');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!email) validationErrors.email = 'Email es requerido';
        if (!password) validationErrors.password = 'Password es requerido';

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
                console.log('User role:', foundUser.role);

                if (foundUser.role === 'admin') {
                    setAuth(true);
                    localStorage.setItem('isAuth', true);
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setErrors({ email: 'Algo salió mal. Por favor, intentá de nuevo más tarde.' });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                handleSubmit,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);