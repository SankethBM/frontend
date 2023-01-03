import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Products = ({ products }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/products/${products.id}`}>
                <Card.Img src={products.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/products/${products.id}`}>
                    <Card.Title as='div'><strong>{products.name}</strong></Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={products.rating} text={`${products.numReviews} reviews`} color='gold' />
                </Card.Text>

                <Card.Text as='h3'>${products.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Products