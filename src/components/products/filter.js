import React, { Component } from 'react'

class Filter extends Component {
  render() {

    return (
        <input className="btn btn-default" type="button" value={this.props.filter} onClick={this.props.onClickFunction}/>
    )
  }
}


export default Filter
 // onClick={() =>this.filterProducts(filter)}
