import React from "react";
import "../stylesheets/nav.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a className="navbar-brand text-white ml-lg-3" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white mr-4" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-4" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-4" href="#">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-4" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
