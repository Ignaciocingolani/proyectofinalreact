import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import ItemList from "./ItemList";
import Item from "./Item"

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProducts(res.filter((product) => product.category === category));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [category]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h1>{category === 1 ? "Descartables" : "Sales"}</h1>
                    <ItemList products={products} />
                </>
            )}
        </div>
    );
};

export default ProductList;