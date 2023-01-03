import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import Products from '../components/Products'

const ProductScreen = () => {
  const parma = useParams();
  const Products = products.find(products => products.id === parma.id);

  return <>
    <Link className='btn btn-dark my-3' to='/'>
      Go Back
    </Link>
    <Row>
      <Col md={6}>
        <Image src={Products.image} alt={Products.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{Products.name}</h3></ListGroup.Item>

          <ListGroup.Item>
            <Rating value={Products.rating} text={`${Products.numReviews} reviews`} />
          </ListGroup.Item>

          <ListGroup.Item> Price : ${Products.price} </ListGroup.Item>
          <ListGroup.Item> Description : {Products.description} </ListGroup.Item>

        </ListGroup>
      </Col>
      <Col md={3}>

        <Card>
          <ListGroup variant='flush'>

            <ListGroup.Item>
              <Row>
                <Col>
                  Price :
                </Col>
                <Col>
                  <strong>${Products.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Status :
                </Col>
                <Col>
                  {Products.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              
              <Button className='btn-block' type='button' >
                Add To Cart  
              </Button>
             
            </ListGroup.Item>

          </ListGroup>
        </Card>
      
      </Col>
    </Row>
  </>

}

export default ProductScreen