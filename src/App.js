import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Category from './components/Category';
import './App.css';
import data from '../categories';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">TIENDAS EL BARATON</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col sm={2}>
              <Category name={data[0].name} items={[data[0].sublevels[0].name]}/>
              <Category name={data[1].name} items={[data[1].sublevels[0].name]}/>
              <Category name={data[2].name} items={[data[2].sublevels[0].name,data[2].sublevels[1].name]}/>
              <Category name={data[3].name} items={[data[3].sublevels[0].name,data[3].sublevels[1].name]}/>
            </Col>
            <Col sm={5}>
              <ProductList />
            </Col>
            <Col sm={3}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
