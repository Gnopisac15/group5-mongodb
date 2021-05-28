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
            <br />
            <div className="col-md-12 m-auto" style={{marginTop:"10px", width:"30%"}}>
            <Link to="/create-employee"  className="btn btn-outline-warning float-left mt-4" >
            <i class='fas fa-user-plus' style={{fontSize: "20px",color:"#d90b4f"}}></i> Add New Employee
              </Link>
            <Link to="/"  className="btn btn-outline-primary float-right mt-4" >
            <i class='fas fa-arrow-alt-circle-right' style={{fontSize: "20px",color:"#3c80e6"}}></i> Go Back to List
              </Link>
           
            </div>
          </div>
          <hr/>   <h3 className="text-center">Update Employee Data</h3><hr/>
          <div></div>


          <div className=" card col-md-5 m-auto" style={{boxShadow: "0 6px 10px 0 #d4044d, 0 6px 20px 0 rgba(3, 0, 0, 0.19)"}}>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'><br />
              <label htmlFor="title" style={{fontWeight:"bolder"}}>Full Name:</label>
              <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-user" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
              <input
                type='text'
                name='full_name'
                className='form-control'
                value={this.state.full_name}
                onChange={this.onChange}
                
              />
            </div>
            </div>

            <div className='form-group'>
            <label htmlFor="isbn" style={{fontWeight:"bolder"}}>Age:</label>
            <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text"><i style={{fontSize: "20px",color:"#d90b4f"}}>@</i></div>
                </div>
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
            </div>

            <div className='form-group'>
            <label htmlFor="author" style={{fontWeight:"bolder"}}>Gender:</label>
            <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-intersex" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
              <input
                type='text'

                name='gender'
                className='form-control'
                value={this.state.gender}
                onChange={this.onChange}
              />
            </div>
            </div>

            <div className='form-group'>
            <label htmlFor="description" style={{fontWeight:"bolder"}}>Address:</label>
            <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-map-marker" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
              <input
                type='text'
                name='address'
                className='form-control'
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>
            </div>

            <div className='form-group'>
            <label htmlFor="published_date" style={{fontWeight:"bolder"}}>Date of Birth:</label>
            <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-calendar" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
              <input
                type='date'
                name='birthdate'
                className='form-control'
                value={this.state.birthdate}
                onChange={this.onChange}
              />
            </div>
            </div>
            <div className='form-group'>
            <label htmlFor="publisher" style={{fontWeight:"bolder"}}>Phone Number:</label>
            <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-phone" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
              <input
                type='number'
                name='phone_number'
                className='form-control'
                value={this.state.phone_number}
                onChange={this.onChange}
              />
            </div>
            </div>

            <button type="submit" className="btn btn-outline-danger btn-lg btn-block">Update Employee</button>
            <br></br>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateEmployeeInfo;