import React from 'react';
import Product from '../Product/Product'; 

const ProductList = ({ products }) => {
   
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