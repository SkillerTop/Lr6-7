import React from 'react';
import { useAuth } from '../Context/AuthenticationContext';

const Authentication = () => {
    const { isLoggedIn, toggleLogin } = useAuth();

    console.log(isLoggedIn);

    return (
        <div>
            <h2>Authentication Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default Authentication;
