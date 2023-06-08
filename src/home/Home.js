import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch';
import EmployeeTable from './EmployeeTable';
import '../style.css';
import employeeData from '../data/employeeData.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      showActiveOnly: true,
    };
  }

  componentDidMount() {
    this.fetchEmployeesData();
  }

  fetchEmployeesData = () => {
    try {
      // const response = await fetch('https://testsyncoffice.netlify.app/.netlify/functions/api/getEmployeesData', {
      //   mode: "no-cors"
      // });
      // const data = await response.json();
      // this.setState({ employees: data });
      this.setState({ employees: employeeData.employeeData });
    } catch (error) {
      console.error('Error fetching employees data:', error);
    }
  };

  handleToggleSwitch = () => {
    this.setState((prevState) => ({
      showActiveOnly: !prevState.showActiveOnly,
    }));
  };

  render() {
    const { employees, showActiveOnly } = this.state;

    return (
      <div className="container">
        <h2>Employee's</h2>
        <ToggleSwitch checked={showActiveOnly} onChange={this.handleToggleSwitch} />
        <EmployeeTable employees={employees} showActiveOnly={showActiveOnly} />
      </div>
    );
  }
}

export default Home;
