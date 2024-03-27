import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    const handleIncrement = (item) => {
        addToCart(item); 
    };

    const handleDecrement = (itemId) => {
        removeFromCart(itemId); 
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <img src={item.img} alt={item.name} /> {}
                        <div>
                            <span>{item.name} - ${item.price} x {item.quantity}</span>
                            <button onClick={() => handleIncrement(item)}>+</button>
                            <button onClick={() => handleDecrement(item.id)}>-</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
