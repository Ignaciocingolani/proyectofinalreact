import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const { cartItems, clearCart } = useContext(CartContext);

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function checkout() {
        console.log('Compra finalizada:', cartItems);
    }

    function handleClearCart() {
        clearCart();
    }

    
    function groupCartItems(cartItems) {
        const groupedItems = {};
        cartItems.forEach(item => {
            if (!item.quantity || isNaN(item.quantity)) {
                item.quantity = 1; 
            }
            if (groupedItems[item.id]) {
                groupedItems[item.id].quantity += item.quantity;
            } else {
                groupedItems[item.id] = { ...item };
            }
        });
        return Object.values(groupedItems);
    }

    const groupedCartItems = groupCartItems(cartItems);

    return (
        <div className="shopping-cart-container">
            <header>
                <h1>Carrito de Compras</h1>
            </header>
            <div id="cart-items">
                {groupedCartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <span>{item.name} - ${item.price} x {item.quantity}</span>
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