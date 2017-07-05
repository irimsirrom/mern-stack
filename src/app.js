import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Products from './components/products'
import Home from './components/home'

const HomePage = () =>(
  <Home/>
)

const About = () =>(
  <div>This is the About</div>
)

const MenuPage = () =>(
  <Products/>

)


const App = () =>(
  <Router>
    <div>
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menus</Link></li>
      </ul>
    </nav>
    <div className="content">
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={About}/>
      <Route path="/menu" component={MenuPage}/>
    </div>
  </div>
  </Router>
)



// class App extends Component {
//   render(){
//     return (
//       <div>
//         <Products />
//       </div>
//     )
//   };
// }

ReactDom.render(<App />, document.getElementById('root'))
