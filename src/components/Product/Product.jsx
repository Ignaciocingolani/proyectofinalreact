import React from 'react';
import './Product.css'; 

const Product = ({ img, title, description, price }) => {
    return (
        <div className='product-container'>
            <div className='product-card'>
                <img className='product-img' src={img} alt={title} />
                <h2 className='product-title'>{title}</h2>
                <p className="product-price">$ {price}</p>
                <div className='product-description'>{description}</div>
            </div>
        </div>
    );
};

export default Product;