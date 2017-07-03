import React, { Component } from 'react'

class Filter extends Component {
  render() {
    const filterList = this.props.filters.map((filter, i) => {
      return (
        <input className="btn btn-default" type="button" value={filter} onClick={this.props.onClickFunction}/>
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
