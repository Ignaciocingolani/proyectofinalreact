import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const Incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const Reducir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const Agregar = () => {
    if (typeof onAdd === 'function') {
      onAdd(count);
    }
  };

  return (
    <div>
        <p>Stock disponible: {stock}</p>
        <button onClick={Reducir}>-</button>
        <span>{count}</span>
        <button onClick={Incrementar}>+</button>
        <button className='agregar' onClick={Agregar}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;