import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (

      // <h1>${this.props.cartTotal}</h1>
      <h1>Cart Total:{this.props.cartTotal}</h1>
    )
  }
}


export default Cart
