import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeData from './EmployeeData';

class ShowEmployeeDataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5080/api/employees')
      .then(res => {
        this.setState({
          employees: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowEmployeeDataList');
      })
  };

  onDeleteClick(id) {
    axios
      .delete('http://localhost:5080/api/employees/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowEmployeeDataList_deleteClick");
      })
  };

  render() {
    const employees = this.state.employees;
    console.log("PrintBook: " + employees);
    let employeeList;

    if (!employees) {
      employeeList = "there is no book record!";
    } else {
      employeeList = employees.map((employee, k) =>
        <EmployeeData employee={employee} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Show Employee Data List</h2>
            </div>
            <div className="col-md-12">
              <Link to="/create-employee" className="btn btn-outline-warning float-right">
                + Add New Employee
              </Link>
              <br />
              <br />
            </div>

          </div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Full name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">DoB</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Manage Employee</th>
                </tr>
              </thead>
              <tbody>
                {employeeList}
              </tbody>
            </table>
          </div>
        </div>

    );
  }
}

export default ShowEmployeeDataList;