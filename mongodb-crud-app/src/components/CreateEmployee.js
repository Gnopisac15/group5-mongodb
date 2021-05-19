import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      age: '',
      gender: '',
      address: '',
      birthdate: '',
      phone_number: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      full_name: this.state.full_name,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      birthdate: this.state.birthdate,
      phone_number: this.state.phone_number
    };

    axios
      .post('http://localhost:5080/api/employees', data)
      .then(res => {
        this.setState({
          full_name: '',
          age: '',
          gender: '',
          address: '',
          birthdate: '',
          phone_number: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateEmployee!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Employee Data List
              </Link>
            </div>
            <div className="col-md-4 m-auto">
              <h1 className="display-4 text-center">Add Employee</h1>
              <p className="lead text-center">
                Create new employee
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    name='full_name'
                    className='form-control'
                    value={this.state.full_name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    min='18'
                    max='60'
                    type='number'
                    placeholder='Age'
                    name='age'
                    className='form-control'
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    className='form-control'
                    value={this.state.gender}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='DoB'
                    name='birthdate'
                    className='form-control'
                    value={this.state.birthdate}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    name='phone_number'
                    className='form-control'
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;