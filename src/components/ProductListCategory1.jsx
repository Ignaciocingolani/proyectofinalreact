import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import ItemList from "./itemList";

const ProductListCategory1 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => setProducts(res.filter((product) => product.category === 1)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Descartables</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ProductListCategory1;