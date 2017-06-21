import React, { Component } from 'react'
import axios from 'axios';
import Product from './products/product'

class Products extends Component {

  constructor() {
    super()
    this.state = {
        products: []
    }
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
        <Product product={product}/>
      )
    })
    return (
      <div>
        {listItems}
        </div>
    )
  }
}


export default Products
