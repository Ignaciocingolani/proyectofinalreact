import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No hay productos disponibles</p>;
    }

    return (
        <div>
            {products.map(product => (
                <Product
                    key={product.id}
                    img={product.img}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;