import React, {Component} from 'react';
import Navbar from './navbar'
import Home from './home'
import Products from '../containers/products'
// import Products from './containers/products'

const img_root = '/img/';
const img_file_ext = '.jpg';

class App extends Component {
  render() {
    return (

      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}


export default App
