import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
          <div>
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <span className="navbar-brand"><Link to="/home">Product App</Link></span>
                      </div>
                      <div className="collapse navbar-collapse">
                          <ul className="nav navbar-nav">
                              <li><Link to="/products">Products</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
        );
      }
  }

export default Navbar
