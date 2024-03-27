import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';  
import { getDatabase, ref, onValue } from 'firebase/database';  

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       
        const firebaseConfig = {
            
        };
        const app = initializeApp(firebaseConfig);

        
        const db = getDatabase(app);
        const productsRef = ref(db, 'products');

        
        onValue(productsRef, (snapshot) => {
            const productsData = snapshot.val();
            const productsArray = Object.keys(productsData).map(key => ({
                id: key,
                ...productsData[key]
            }));
            setProducts(productsArray);
        });

       
        return () => {
            
        };
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <p>Descripción: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;