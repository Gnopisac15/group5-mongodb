import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateEmployee from './components/CreateEmployee';
import ShowEmployeeInfo from './components/ShowEmployeeInfo';
import ShowEmployeeDataList from './components/ShowEmployeeDataList';
import UpdateEmployeeInfo from './components/UpdateEmployeeInfo';

class App extends Component {
    render() {
        return (
            <Router >
            <div >
            <Route exact path = '/' component = { ShowEmployeeDataList }/> 
            <Route path = '/create-employee'component = { CreateEmployee }/> 
            <Route path = '/edit-employee/:id'component = { UpdateEmployeeInfo }/>
            <Route path = '/show-employee/:id'component = { ShowEmployeeInfo }/> 
            </div >
            </Router>
        );
    }
}

export default App;