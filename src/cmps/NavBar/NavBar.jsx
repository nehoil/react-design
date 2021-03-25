import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container container">
        <Link to="/">
          <div className="nav-logo">
            <span>Dine Resturant</span>
          </div>
        </Link>
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
