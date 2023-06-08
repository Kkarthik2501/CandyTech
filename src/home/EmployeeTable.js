import React, { Component } from 'react';
import '../style.css';

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmployees: [],
      fields: [],
    };
  }

  componentDidMount() {
    this.updateFilteredEmployees();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees !== this.props.employees || prevProps.showActiveOnly !== this.props.showActiveOnly) {
      this.updateFilteredEmployees();
    }
  }

  updateFilteredEmployees = () => {
    const { employees, showActiveOnly } = this.props;
    const filteredEmployees = showActiveOnly
      ? employees.filter((employee) => employee.status === 'Active')
      : employees.filter((employee) => employee.status === 'Inactive');

    const fields = filteredEmployees.length > 0 ? Object.keys(filteredEmployees[0]) : [];

    this.setState({
      filteredEmployees,
      fields,
    });
  };

  render() {
    const { filteredEmployees, fields } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            {fields.map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              {fields.map((field) => (
                <td key={field}>{employee[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
