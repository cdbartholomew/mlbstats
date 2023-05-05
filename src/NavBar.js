import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/pitcher-stats" className="nav-link">
            Pitchers
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/hitter-stats" className="nav-link">
            Hitters
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/team-pitchers" className="nav-link">
            Team Pitchers
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/team-hitters" className="nav-link">
            Team Hitters
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
