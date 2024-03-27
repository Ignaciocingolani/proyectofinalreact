import React, { useState } from 'react';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const addToCart = () => {
    const item = { ...product, quantity };
    setCart([...cart, item]);
    console.log(`Agregando ${quantity} ${product.name} al carrito`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      <label htmlFor="quantity">Cantidad:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max={product.stock}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={addToCart}>Agregar al carrito</button>
      <div>
        <h3>Productos en el carrito:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.quantity} {item.name} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;