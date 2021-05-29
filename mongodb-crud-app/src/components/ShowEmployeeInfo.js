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
      .get('http://localhost:9555/api/employees/' + this.props.match.params.id)
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
      .delete('http://localhost:9555/api/employees/' + id)
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

      <div className="card col-md-12 mx-auto">
        <form noValidate onSubmit={this.onSubmit}>
        <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Full Name</label>
            <label className='form-control'>{employee.full_name}</label>
          </div>

          <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Age</label>
            <label className='form-control'>{employee.age}</label>
          </div>

          <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Gender</label>
            <label className='form-control'>{employee.gender}</label>
          </div>

          <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Address</label>
            <label className='form-control'>{employee.address}</label>
          </div>

          <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Date of Birth: </label>
            <label
              className='form-control'
             > {employee.birthdate}</label>
          </div>
          <div className='form-group'>
            <label style={{fontWeight:"bolder"}}>Phone Number</label>
            <label
              className='form-control'
            >{employee.phone_number}</label>
          </div>
        </form>
    
        </div>
    </div>



    return (
      <div className="ShowBookDetails">
            <br />
        <div className="container">
          <br /> <br />
          <Link to="/" className="btn btn-outline-primary float-left">
            Go Back
              </Link>
          <br /> <br />
          <div className="row">
            <div className="col-md-12 m-auto ">
             
              <hr />  <h3 className="text-center">Employee Details</h3><hr /><br />
            </div>
          </div>
          <div className="container">
      
            <div class="row">
              <div class="col ml-5">
                <img src={employee.img_url} style={{ height: "10px;", width:"90%" }} />
              </div>
              <div class="col-6 mr-5">
                {EmpData}
                <div className="container ">
                  <div className="row  justify-content-md-center">
                    <div class="col-md-4"> <button type="button" className="btn btn-danger btn-block" onClick={this.onDeleteClick.bind(this, employee._id)}>Delete</button><br />
                    </div>

                    <div className="col-md-4 ">
                      <Link to={`/edit-employee/${employee._id}`} className="btn btn-info btn-block">
                        Edit
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
            {EmpData}
            <div className="container ">
              <div className="row  justify-content-md-center">
                <div class="col-md-2"> <button type="button" className="btn btn-outline-danger btn-block" onClick={this.onDeleteClick.bind(this, employee._id)}>Delete</button><br />
                </div>

                <div className="col-md-2 ">
                  <Link to={`/edit-employee/${employee._id}`} className="btn btn-outline-info btn-block">
                    Edit
                    </Link>
                </div>
              </div>
            </div> */}
          </div>



        </div>

      </div>
    );
  }
}

export default ShowEmployeeInfo;