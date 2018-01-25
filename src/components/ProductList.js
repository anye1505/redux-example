import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Rrfresco Lata", price: 299, image: "http://epmghispanic.media.clients.ellingtoncms.com/img/photos/2017/02/15/gaseosas_t670x470.jpg?23a6cf1936a4889561e6226c97c290c4239edcb5" },
        { id: 2, name: "Refresco 200cc", price: 99, image: "http://www.bellezaz.com/wp-content/uploads/2015/04/bebidas-gaseosas.jpg" },
        { id: 3, name: "Refresco 2 Ltros", price: 149, image: "https://elcooperante.com/wp-content/uploads/2017/02/coca-cola.jpg" },
      ]
    }
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToCart(product) {
    store.dispatch({
      type: "ADD_TO_CART",
      product
    })
  }
}

export default ProductList;
