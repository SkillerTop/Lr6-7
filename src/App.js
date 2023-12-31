import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AuthProvider } from './Context/AuthenticationContext';
import { CartProvider } from './Context/CartContext';
import './App.css';
import { Header, Body, Footer } from './Components/import';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleLogin = () => {
        setIsLogged(prevIsLogged => !prevIsLogged);
    };

    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const removeItem = index => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <AuthProvider>
            <CartProvider>
                <div className="app">
                    <Header />
                    <Body
                        isLogged={isLogged}
                        toggleLogin={toggleLogin}
                        items={items}
                        addItem={addItem}
                        removeItem={removeItem}
                    />
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
