import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const { cartItems, clearCart } = useContext(CartContext);

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    function checkout() {
        console.log('Compra finalizada:', cartItems);
    }

    function handleClearCart() {
        clearCart();
    }

    return (
        <div className="shopping-cart-container">
            <header>
                <h1>Carrito de Compras</h1>
            </header>
            <div id="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <span>{item.name} - ${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="total-price">
                <h2>Total: ${getTotalPrice()}</h2>
            </div>
            <footer>
                <button className="checkout-btn" onClick={checkout}>Finalizar Compra</button>
                <button className="clear-cart-btn" onClick={handleClearCart}>Limpiar Carrito</button>
            </footer>
        </div>
    );
}

export default ShoppingCartPage;