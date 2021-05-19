import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class UpdateEmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      age: '',
      gender: '',
      address: '',
      birthdate: '',
      phone_number: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:9555/api/employees/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          full_name: res.data.full_name,
          age: res.data.age,
          gender: res.data.gender,
          address: res.data.address,
          birthdate: res.data.birthdate,
          phone_number: res.data.phone_number
        })
      })
      .catch(err => {
        console.log("Error from UpdateEmployeeInfo");
      })
  };

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
      .put('http://localhost:9555/api/employees/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in UpdateEmployeeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
  
            <div className="col-md-12 m-auto">
            <Link to="/"  className="btn btn-outline-primary float-left mt-4">
            Go Back to List
              </Link>
              <h1 className="display-4 text-center">Update Employee Data</h1>
            </div>
          </div>
          <hr/><hr/>
          <div className="col-md-5 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title" style={{fontWeight:"bolder"}}>Full Name:</label>
              <input
                type='text'
                name='full_name'
                className='form-control'
                value={this.state.full_name}
                onChange={this.onChange}
                
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn" style={{fontWeight:"bolder"}}>Age:</label>
              <input
                min='18'
                max='59'
                type='number'
                name='age'
                className='form-control'
                value={this.state.age}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author" style={{fontWeight:"bolder"}}>Gender:</label>
              <input
                type='text'

                name='gender'
                className='form-control'
                value={this.state.gender}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description" style={{fontWeight:"bolder"}}>Address:</label>
              <input
                type='text'
                name='address'
                className='form-control'
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date" style={{fontWeight:"bolder"}}>Date of Birth:</label>
              <input
                type='date'
                name='birthdate'
                className='form-control'
                value={this.state.birthdate}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher" style={{fontWeight:"bolder"}}>Phone Number:</label>
              <input
                type='number'
                name='phone_number'
                className='form-control'
                value={this.state.phone_number}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Employee</button>
            <br></br>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateEmployeeInfo;