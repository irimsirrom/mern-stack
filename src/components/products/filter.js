import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (

      <button onClickFunction={this.props.onClickFunction}>{this.prop.filterType}</button>
    )
  }
}


export default Filter
