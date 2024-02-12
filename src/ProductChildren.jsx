import React from 'react';
import ItemCount from './ContadorBtn';

function ProductChildren({ img, title, children, price, stock }) {
  return (
    <div>
      <div className='product-container'>
        <div className='product-card'>
          <img className='img' src={img} width="100px" height="100px" alt="Img" />
          <h2 className='product-title'>{title}</h2>
          <p className="product-price">$ {price}</p>
          <p className="product-stock">Stock disponible: {stock}</p>
          <div className='product-description'>{children}</div>
          <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log(`Agregados ${quantity} ${title} al carrito`)} />
        </div>
      </div>
    </div>
  );
}

export default ProductChildren;
