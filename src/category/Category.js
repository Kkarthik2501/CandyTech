import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Tab from './Tab';
import Card from './Card';

import departmentCardData from '../data/departmentCardData.json';
import designationCardData from '../data/designationCardData.json';

import './Card.css';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'department',
      departmentData: [],
      designationData: [],
    };
  }

  componentDidMount() {
    this.fetchDepartmentData();
    this.fetchDesignationData();
  }

  fetchDepartmentData = async () => {
    try {
      // const response = await axios.get('https://testsyncoffice.netlify.app/.netlify/functions/api/getDepartmentData');
      // this.setState({ departmentData: response.data });
      this.setState({ departmentData: departmentCardData.departmentData });
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  fetchDesignationData = async () => {
    try {
      // const response = await axios.get('https://testsyncoffice.netlify.app/.netlify/functions/api/getDesignationData');
      // this.setState({ designationData: response.data });
      this.setState({ designationData: designationCardData.designationData });
    } catch (error) {
      console.error('Error fetching designation data:', error);
    }
  };

  handleTabChange = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab, departmentData, designationData } = this.state;

    return (
      <div className="category">
        <Tab selectedTab={selectedTab} onTabChange={this.handleTabChange} />
        <div className="card-container">
          <Switch>
            <Route exact path="/category">
              <Redirect to="/category/department" />
            </Route>
            <Route path="/category/department">
              {departmentData.map((item) => (
                <Card
                  key={item.id}
                  title={item.department}
                  description={item.description}
                  date={item.date}
                />
              ))}
            </Route>
            <Route path="/category/designation">
              {designationData.map((item) => (
                <Card
                  key={item.id}
                  title={item.designation}
                  description={item.description}
                  date={item.date}
                />
              ))}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Category;
