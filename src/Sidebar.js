import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav>
          <ul className="sidebar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
