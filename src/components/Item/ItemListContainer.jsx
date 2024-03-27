import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../asyncMock';
import ProductList from "../Product/ProductList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching product data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;