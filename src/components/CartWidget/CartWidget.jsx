import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="container">
            <button>
                <HiOutlineShoppingCart />
                {}
                <span>{cartItemCount}</span> 
            </button>  
        </div>
    );
};

export default CartWidget;