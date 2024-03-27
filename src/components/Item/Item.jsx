import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(value);
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
                <Button variant="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Ver detalles
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Item;