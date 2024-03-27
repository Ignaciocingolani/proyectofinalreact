import React from 'react';
import Item from '../Item/Item'; 

const ItemList = ({ products, addToCart }) => {
    return (
        <div>
            {products.map(product => (
                <Item
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ItemList;