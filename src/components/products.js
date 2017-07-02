import React, { Component } from 'react'
import axios from 'axios';
import Product from './products/product'
import Cart from './products/cart'

class Products extends Component {

  constructor() {
    super()
    this.state = {
        products: [],
        cartTotal:0
    }
    this.addToCart = () => {
      this.setState((prevState) =>({
          cartTotal: prevState.cartTotal + 1
      }));
    };
  }

  componentDidMount() {
      axios.get(`http://localhost:3000/api/products`)
        .then(res => {
          const products = res.data.map(obj => obj);
          this.setState({
            products
           });
        });
    }

  render() {
    const listItems = this.state.products.map((product, i) => {
      return (
        <Product onClickFunction={this.addToCart} product={product}/>
      )
    })
    return (
      <div>
        {listItems}
        <Cart cartTotal={this.state.cartTotal} />
        </div>
    )
  }
}


export default Products
