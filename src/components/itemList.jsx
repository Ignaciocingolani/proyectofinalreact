import React from "react";

import Item from "./Item";


const ItemList = ({ products, category}) => {
    const filteredProducts = products.filter    ((product) => product.category === 1);


    return (
        <div>
            {filteredProducts?.map((product) => (
                <Item key={product.id} product={product}/>
            ))}
        </div>
    );
    
    }

    export default ItemList;
