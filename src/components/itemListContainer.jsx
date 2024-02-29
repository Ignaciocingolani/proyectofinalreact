import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";

import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        console.log("aca se monta el componente");
        pedirDatos()
            .then((res) => {
                setProducts(res);
                setLoading(false); 
            })
            .catch((err) => console.log(err))
            .finally(() => console.log("termino la promesa"));
    }, []);

    return (
        <>
            <h1>Productos</h1>
            {loading ? ( 
                <p>Cargando....</p>
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
};

export default ItemListContainer;