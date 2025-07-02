import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const RutasProtegidas = ({ children }) => {
    const { isAuthenticated } = useContext(CartContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    return children;
};
