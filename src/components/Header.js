import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import logo from '../logo.png'

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#map">
          <img src={logo} alt="logo with food"/>
          Next Meal
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav float-right text-right">
      <li className="nav-item active">
        <a className="nav-link" href="#map">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#map">Add Your Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#map">Terms of Service</a>
      </li>
    </ul>
  </div>
      </nav>
    )
  }
}

export default Header;
