import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

class Tab extends Component {
  handleTabClick = (tab) => {
    const { onTabChange } = this.props;
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  render() {
    const { selectedTab } = this.props;

    return (
      <nav className="tab-container">
        <NavLink
          to="/category/department"
          activeClassName="active"
          className={`tab-link ${selectedTab === 'department' ? 'active' : ''}`}
          onClick={() => this.handleTabClick('department')}
        >
          Department
        </NavLink>
        <NavLink
          to="/category/designation"
          activeClassName="active"
          className={`tab-link ${selectedTab === 'designation' ? 'active' : ''}`}
          onClick={() => this.handleTabClick('designation')}
        >
          Designation
        </NavLink>
      </nav>
    );
  }
}

export default Tab;
