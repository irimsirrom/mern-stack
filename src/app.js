import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios';

const img_root = '/img/';
const img_file_ext = '.jpg';

// import ProductList from './components/products-list.js'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    products: []
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

  render(){
    return (
      <div>
        <h1>Products</h1>
          {this.state.products.map(product =>
              <div key={product._id} className="col-xs-6 col-md-3">
                <div className="thumbnail">
                  <img src={img_root + product.img_src + img_file_ext}/>
                  <div className="caption">
                      <h3>{product.product_name}</h3>
                      <p className="description">{product.category}</p>
                      <div className="clearfix">
                          <div className="price pull-left">${product.price}</div>
                      </div>
                  </div>
                </div>
              </div>
            )}
      </div>
    )
  };
}

ReactDom.render(<App />, document.getElementById('root'))
