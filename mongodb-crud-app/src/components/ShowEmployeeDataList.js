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
      .get('http://localhost:9555/api/employees')
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

      .delete('http://localhost:9555/api/employees/' + id)

      .then(res => {
        window.location.reload(true);
        // this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowEmployeeDataList_deleteClick");
      })
  };




  render() {
    const employees = this.state.employees;
    console.log("PrintBook: " + employees);

    // if (!employees) {
    //   employeeList = "there is no book record!";
    // } else {
    //   employeeList = employees.map((employee, k) =>
    //     <EmployeeData employee={employee} key={k} />
    //   );
    // }





    return (
     
      <div clasName="container" style={{padding:"10px"}} >
         <br /> 
        <Link to="/create-employee" className="btn btn-outline-warning float-right" style={{marginRight:"50px"}} >
        <i class='fas fa-user-plus' style={{fontSize: "20px",color:"#d90b4f"}}></i> Add New Employee
               </Link>
       
        <br /> <br />
        <div className="row ml-5 mr-5">
          {employees.map((user, index) => (
            <div className="col-lg-3 card mt-2" style={{boxShadow: "0 6px 10px 0 #e63c77, 0 6px 20px 0 rgba(3, 0, 0, 0.19)"}}>

              <div key={index} >
                <div className="card rounded shadow-sm border-0">
                  <div className="card-body p-0">

                    <div className="px-3 py-5 text-center card-img-top mt-2" style={{background:"#e61c62"}}>
                      <img src={user.img_url} alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" style={{width:"120px", height:"120px"}}/>
                      <h5 className="text-white mb-0">{user.full_name}</h5>
                      
                    </div>
                    <div className="p-4 d-flex justify-content-center">
                      <ul className="list-inline mb-0">
                        <i className="fa fa-trash-o " style={{ fontSize: "24px",color:"red" }} onClick={this.onDeleteClick.bind(this, user._id)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                       <Link to={`/edit-employee/${user._id}`}>
                          <i className='fas fa-user-edit' style={{ fontSize: "24px",color:"#e6991c" }}></i>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={`/show-employee/${user._id}`}>
                          <i className="fa fa-eye text-primary" style={{ fontSize: "24px" }}></i>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;

                    </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>





      // <div className="ShowBookList">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <br />
      //         <h2 className="display-4 text-center">Show Employee Data List</h2>
      //       </div>
      //       <div className="col-md-12">
      //         <Link to="/create-employee" className="btn btn-outline-warning float-right">
      //           + Add New Employee
      //         </Link>
      //         <br />
      //         <br />
      //       </div>

      //     </div>
      //       <table className="table table-hover">
      //         <thead>
      //           <tr>
      //             <th scope="col">Full name</th>
      //             <th scope="col">Age</th>
      //             <th scope="col">Gender</th>
      //             <th scope="col">Address</th>
      //             <th scope="col">DoB</th>
      //             <th scope="col">Phone Number</th>
      //             <th scope="col">Manage Employee</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {employeeList}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
    );
  }
}

export default ShowEmployeeDataList;