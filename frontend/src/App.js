import React from 'react';
import { BrowserRouter, Link, Route, Routes , Navigate} from 'react-router-dom'
// import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import products from './products'
import Products from './components/Products'
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Header />
        <Link to="/" ></Link>
        <Link to="/products"></Link>
      </nav>
      <Container>
        <Routes>
          <Route path="/" element={< HomeScreen />} /> 
          <Route path='/products/:id' element={< ProductScreen />} />
        </Routes>
        {/* <Route path='/products' element={<Navigate  to = "/products" />} /> */} 
        <Footer />
      </Container>

    </BrowserRouter>
  )
}

export default App;
