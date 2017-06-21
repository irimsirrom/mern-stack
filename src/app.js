import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Products from './components/products'
import Home from './components/home'



const img_root = '/img/';
const img_file_ext = '.jpg';


class App extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     products: []
//   };
// }
// componentDidMount() {
//     axios.get(`http://localhost:3000/api/products`)
//       .then(res => {
//         const products = res.data.map(obj => obj);
//         this.setState({
//           products
//          });
//       });
//   }

  render(){
    return (
      <div>
        <Products />
      </div>
    )
  };
}

ReactDom.render(<App />, document.getElementById('root'))
