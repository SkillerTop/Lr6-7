import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const useAuth = () => useContext(AuthenticationContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
    };

    const contextValue = {
        isLoggedIn,
        toggleLogin,
    };

    return (
        <AuthenticationContext.Provider value={contextValue}>
            {children}
        </AuthenticationContext.Provider>
    );
};
