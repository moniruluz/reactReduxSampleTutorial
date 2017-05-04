import React, { Component } from 'react';
import {Link } from 'react-router';

class Header extends Component {

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {

    return (
      <header className="header">
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">My App</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
              <li><Link to={"/user"}>User</Link></li>
              <li><Link to={"/signup"}>Signup</Link></li>
            </ul>
          </div>
        </div>
        </nav>
      </header>
    );
  }
}

export default Header;
