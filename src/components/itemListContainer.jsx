import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import ItemList from "./ItemList";
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProducts(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="text-center">
            <h1>Todos nuestros productos</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;