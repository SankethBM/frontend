import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
  return (
   <footer>
    <Container>
      <Row>
      <Link>
        <p>Help & Support !</p>
      </Link>  
        <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
      </Row>
    </Container>
   </footer>
  )
}

export default Footer