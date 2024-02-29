import React from "react";

const item = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
           
        </div>
    );
};

export default item;