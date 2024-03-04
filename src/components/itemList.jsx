import React from "react";
import Item from "./Item";

const ItemList = ({ products, onAddToCart }) => {
    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ItemList;