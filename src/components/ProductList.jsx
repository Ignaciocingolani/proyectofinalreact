import React, { useEffect, useState } from "react";
import { pedirDatos } from "../asyncMock";
import Item from "./Item";

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

    const handleAddToCart = (product, quantity) => {
        console.log("Añadir al carrito:", product, quantity);
    };

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h1>{category === 1 ? "Descartables" : "Sales"}</h1>
                    <div className="container">
                        <div className="row justify-content-center">
                            {products.map((product) => (
                                <div key={product.id} className="col-md-4">
                                    <Item product={product} addToCart={handleAddToCart} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductList;