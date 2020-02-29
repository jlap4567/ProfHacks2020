import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import logo from '../logo.png'
import './Header.css'


class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#map">
          <img src={logo} alt="logo with food"/>
          Next Meal
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav float-right text-right">
      <li className="nav-item active">
        <Link to="/" className="nav-item nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-item nav-link">Add Food</Link>
      </li>
    </ul>
  </div>
      </nav>
    )
  }
}

export default Header;
