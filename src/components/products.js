import React, { Component } from 'react'
import axios from 'axios';
import Product from './products/product'
import Cart from './products/cart'
// import Filter from './products/filter'

class Products extends Component {

  constructor() {
    super()
    this.state = {
        products: [],
        cartTotal:0,
        activeList: [],
        // filterType: 'Meat'
    }
    this.addToCart = (product) => {
      this.setState((prevState) =>({
          cartTotal: prevState.cartTotal + product.price
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
        <Product onClickFunction={() =>this.addToCart(product)} product={product} key={product._id}/>
      )
    })
    return (
      <div>
        {/* <Filter onClickFunction={() =>this.filterProducts(filterType)} filterType={filterType}/> */}
        {listItems}
        <Cart cartTotal={this.state.cartTotal} />
        </div>
    )
  }
}


export default Products
