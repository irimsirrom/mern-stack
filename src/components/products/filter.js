import React, { Component } from 'react'

class Filter extends Component {
  render() {
    const filterList = this.props.filters.map((filter, i) => {
      return (
        <button className="btn btn-default" onClick={this.props.onClickFunction}>{filter}</button>
      )
    })
    return (
        <div className="col-md-12 btn-group">
          {filterList}
        </div>
    )
  }
}


export default Filter
