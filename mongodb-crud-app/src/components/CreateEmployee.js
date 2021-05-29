import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      img_url: '',
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
      img_url:this.state.img_url,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      birthdate: this.state.birthdate,
      phone_number: this.state.phone_number
    };

    axios
      .post('http://localhost:9555/api/employees', data)
      .then(res => {
        this.setState({
          full_name: '',
          img_url:'',
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
          <div className="row" >
            <div className="col-md-12 mx-auto">
              <br />
            </div>
            <div className="card  col-md-4 m-auto" style={{boxShadow: "0 6px 10px 0 #d4044d, 0 6px 20px 0 rgba(3, 0, 0, 0.19)"}}>
            <Link to="/" className="btn btn-outline-danger "   ><i class="fa fa-eye" ></i>
                Show Employee Data List
              </Link>
              <img src="employee1.png" height="130px"></img>
              <h3 className=" text-center">Add Employee</h3>
              <div className="card-body">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-user" style={{fontSize: "27px",color:"#d90b4f"}}></i></div>
                </div>
                  <input
                    type='text'
                    placeholder='Full Name'
                    name='full_name'
                    className='form-control'
                    value={this.state.full_name}
                    onChange={this.onChange}
                  />
                </div>
                </div>

                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i style={{fontSize: "20px",color:"#d90b4f"}}><img src="https://cdn1.iconfinder.com/data/icons/essentials-blue-red/60/005_-_Image-256.png" style={{width:"20px"}}/></i></div>
                </div>
                  <input
                    min='18'
                    max='60'
                    type='text'
                    placeholder='Image Url'
                    name='img_url'
                    className='form-control'
                    value={this.state.img_url}
                    onChange={this.onChange}
                    
                  />
                  </div>
                </div>

                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i style={{fontSize: "20px",color:"#d90b4f"}}>@</i></div>
                </div>
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
                </div>

                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-intersex" style={{fontSize: "24px",color:"#d90b4f"}}></i></div>
                </div>
                  <input
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    className='form-control'
                    value={this.state.gender}
                    onChange={this.onChange}
                    
                  />
                </div>
                </div>

                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-map-marker" style={{fontSize: "34px",color:"#d90b4f"}}></i></div>
                </div>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                    
                  />
                </div>
                </div>

                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-calendar" style={{fontSize: "20px",color:"#d90b4f"}}></i></div>
                </div>
                  <input
                    type='date'
                    placeholder='DoB'
                    name='birthdate'
                    className='form-control'
                    value={this.state.birthdate}
                    onChange={this.onChange}
                    
                  />
                </div>
                </div>
                <div className='form-group'>
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-phone" style={{fontSize: "25px",color:"#d90b4f"}}></i></div>
                </div>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    name='phone_number'
                    className='form-control'
                    value={this.state.phone_number}
                    onChange={this.onChange}
                    
                  />
                </div>
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
      </div>
    );
  }
}

export default CreateEmployee;