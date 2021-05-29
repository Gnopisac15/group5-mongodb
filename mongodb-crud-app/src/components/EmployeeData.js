import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const EmployeeData = (props) => {
    const  employee  = props.employee;
    return(
       
        <tr>
            <td>{employee.full_name}</td>
            <td>{employee.img_url}</td>
            <td>{employee.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.address}</td>
            <td>{employee.birthdate}</td>
            <td>{employee.phone_number}</td>
            <td>
            <Link  to={`/show-employee/${employee._id}`}><i className="fa fa-pencil-square-o text-info"  ></i></Link>
          
            </td>
        </tr>
   
    )
    
};

export default EmployeeData;