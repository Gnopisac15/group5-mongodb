import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class ShowEmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5080/api/employees/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          employee: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowEmployeeInfo");
      })
  };

  onDeleteClick(id) {
    axios
      .delete('http://localhost:5080/api/employees/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowEmployeeInfo_deleteClick");
      })
  };


  render() {

    const employee = this.state.employee;
    let EmpData = <div>



      <div className="col-md-5 mx-auto">
        <form noValidate onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor="title">Full Name</label>
            <input
              type='text'
              name='title'
              className='form-control'
              value={employee.full_name}

            />
          </div>
          <br />

          <div className='form-group'>
            <label htmlFor="isbn">Age</label>
            <input
              type='text'
              name='isbn'
              className='form-control'
              value={employee.age}

            />
          </div>

          <div className='form-group'>
            <label htmlFor="author">Gender</label>
            <input
              type='text'

              name='author'
              className='form-control'
              value={employee.gender}

            />
          </div>

          <div className='form-group'>
            <label htmlFor="description">Address</label>
            <input
              type='text'
              name='description'
              className='form-control'
              value={employee.address}
            />
          </div>

          <div className='form-group'>
            <label htmlFor="published_date">DoB</label>
            <input
              type='text'
              name='published_date'
              className='form-control'
              value={employee.birthdate}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="publisher">Phone Number</label>
            <input
              type='text'
              name='publisher'
              className='form-control'
              value={employee.phone_number}
            />
          </div>
        </form>
      </div>

    </div>



    return (
      <div className="ShowBookDetails">
        <div className="container">
        <br /> <br />
        <Link to="/" className="btn btn-outline-primary float-right">
                Show Lists
              </Link>
              <br /> <br />
          <div className="row">
            <div className="col-md-5 m-auto ">
              <h1 className="display-4 text-center">Employee Details</h1>
              <p className="lead text-center">
                View Employee Information
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            {EmpData}
            <div className="container ">
            <div class="row  justify-content-md-center">
              <div class="col-md-2"> <button type="button" className="btn btn-outline-danger btn-block" onClick={this.onDeleteClick.bind(this, employee._id)}>Delete</button><br />
              </div>

              <div class="col-md-2 ">
                <Link to={`/edit-employee/${employee._id}`} className="btn btn-outline-info btn-block">
                  Edit
                    </Link>
              </div>
            </div>
            </div>
          </div>



        </div>

      </div>
    );
  }
}

export default ShowEmployeeInfo;