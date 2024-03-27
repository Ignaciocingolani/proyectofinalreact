import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import ItemList from "./ItemList";
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

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

    const addToCart = (product, quantity) => {
        const item = { ...product, quantity };
        setCart([...cart, item]);
        console.log(`Agregando ${quantity} ${product.name} al carrito`);
    };

    return (
        <div className="text-center">
            <h1>Todos nuestros productos</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={products} addToCart={addToCart} />
            )}
        </div>
    );
};

export default ItemListContainer;