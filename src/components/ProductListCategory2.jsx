import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import ItemList from "./ItemList";

const ProductListCategory2 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => setProducts(res.filter((product) => product.category === 2)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Sales</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ProductListCategory2;