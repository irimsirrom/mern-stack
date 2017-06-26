import React, { Component } from 'react'

const img_root = '/img/';
const img_file_ext = '.jpg';

class Product extends Component {
  render() {
    return (

      <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={img_root + this.props.product.img_src + img_file_ext}/>
            <div className="caption">
                <h3>{this.props.product.product_name}</h3>
                <p className="description">{this.props.product.category}</p>
                <div className="clearfix">
                    <div className="price pull-left">${this.props.product.price}</div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}


export default Product
