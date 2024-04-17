import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../index.css';
import EmployeeService from './Services';

let divStyle = {
  margin: '8% 8%',
};

class ListEmployee extends Component {
  constructor(props) {
    super(props)
    this.employeesService = new EmployeeService();

    this.state = {
      employees: []
    }

    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount = () => {
    this.getEmployeeList()
  }

  getEmployeeList() {
    axios.get('http://localhost:4000/employees')
    .then((response) => {
      console.log(response);
      this.setState({
        employees: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteEmployee(empid) {
    this.employeesService.deleteEmployee(empid);
    this.getEmployeeList();
  }

  render() {
    const {employees} = this.state;

    return (
      <div style={divStyle}>
      <Table>
        <thead responsive='true'>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        <th></th>
        </tr>
        </thead>

        <tbody>
        {
          employees && employees.map((employee, i) => {
            return (
              <tr key={i}>
              <td>{i+1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
              <Link to={'' + employee._id} className="btn btn-primary" >
              Edit</Link>
              </td>
              <td>
              <Button onClick={() => this.deleteEmployee(employee._id)} 
                className="btn btn-danger">Delete</Button>
              </td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
      </div>
    )
  }
}

export default ListEmployee;