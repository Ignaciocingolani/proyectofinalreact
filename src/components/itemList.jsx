import React from "react";
import Item from "./item";

const itemList = ({ products, category }) => {
    const filteredProducts = category
         products.filter((product) => product.category === category)
         products;

    return (
        <div>
            {filteredProducts.map((product) => (
                <item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default itemList;