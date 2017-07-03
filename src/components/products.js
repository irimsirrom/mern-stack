import React, { Component } from 'react'
import axios from 'axios';
import Product from './products/product'
import Cart from './products/cart'
import Filter from './products/filter'

class Products extends Component {

  constructor() {
    super()
    this.state = {
        products: [],
        cartTotal:0,
        activeList: [],
        filters: ['Meat', 'Dairy', 'Vegan'],
        selectedFilter: 'Meat'
    }
    this.addToCart = (product) => {
      this.setState((prevState) =>({
          cartTotal: prevState.cartTotal + product.price
      }));
    };
    this.filterProducts = () =>{
      const filteredList = [];
      for (var i=0;i < this.state.products.length; i++){
        if(this.state.products[i].category === this.state.selectedFilter){
          filteredList.push(this.state.products[i]);
        }
      }
      this.setState(() => ({
        products: filteredList
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
      <div className="content">
          <Filter onClickFunction={() =>this.filterProducts()} filters={this.state.filters}/>
          {listItems}
          <Cart cartTotal={this.state.cartTotal} />
      </div>
    )
  }
}


export default Products
