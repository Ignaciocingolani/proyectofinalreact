import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: {product.price}</Card.Text>
                <Card.Text>Stock disponible: {product.stock}</Card.Text>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Ver detalles
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Item;