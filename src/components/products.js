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
        filteredList:[],
        menu:[]
        // selectedFilter: ''
    }
    this.addToCart = (product) => {
      const selectedMenu = this.state.menu;
      selectedMenu.push(product);
      this.setState((prevState) =>({
          cartTotal: prevState.cartTotal + product.price,
          menu:selectedMenu
      }));
    };
    this.filterProducts = (filter) =>{
      const filteredList = [];
      for (var i=0;i < this.state.products.length; i++){
        if(this.state.products[i].category === filter){
          filteredList.push(this.state.products[i]);
        }
      }
      this.setState(() => ({
        filteredList: filteredList
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
    const listItems = this.state.filteredList.map((product, i) => {
      return (
        <Product onClickFunction={() =>this.addToCart(product)} product={product} key={product._id}/>
      )
    })
    const filterList = this.state.filters.map((filter, i) => {
      return (
        <Filter onClickFunction={() =>this.filterProducts(filter)} filter={filter} key={filter}/>
      )
    })
    const menuList = this.state.menu.map((menuItem, i) =>{
      return (
        <li>{menuItem.product_name}</li>
      )
    })
    return (
      <div className="content">
          <div className="col-md-12 btn-group">
            {filterList}
          </div>
          <ul>{menuList}</ul>
          {/* <Filter onClickFunction={() =>this.filterProducts(filter)} filters={this.state.filters}/> */}
          {listItems}
          <Cart cartTotal={this.state.cartTotal} />
      </div>
    )
  }
}


export default Products
