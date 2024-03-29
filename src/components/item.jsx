import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { CartContext } from './CartWidget/CartContext';

const Item = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setQuantity(Math.min(value, product.stock));
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: {product.price}</Card.Text>
                <Card.Text>Stock disponible: {product.stock}</Card.Text>
                <Form.Group controlId="quantity">
                    <Form.Label>Cantidad:</Form.Label>
                    <Form.Control
                        type="number"
                        min="1"
                        max={product.stock}
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Item;