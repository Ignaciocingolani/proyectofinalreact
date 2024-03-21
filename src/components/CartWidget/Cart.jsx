import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <img src={item.img} alt={item.name} /> {}
                        <div>
                            <span>{item.name} - ${item.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;