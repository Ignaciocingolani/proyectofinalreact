import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import itemList from "./itemList"; 

const itemListContainer = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        console.log("aca se monta el componente");
        pedirDatos()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
            .finally(() => console.log("termino la promesa"));
    }, []);

    return (
        <>
            <h1>itemListContainer</h1>
            <itemList products={products} /> 
        </>
    );
};


export default itemListContainer;