import React from "react";
import Item from "./Item";

const ItemList = ({ products, addToCart }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            {}
            <Item product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;