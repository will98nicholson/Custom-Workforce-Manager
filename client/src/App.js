import React from 'react';
import './App.css';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash';
import EmpDash from './pages/EmpDash'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// import Review from '.pages/JobDetail';


function App() {
    return (
        <Router>
            <Route exact path='/'><Login /></Route>
            <Route exact path='/admin'><AdminDash /></Route>
            <Route exact path='/employee'><EmpDash /></Route>
        </Router>
    );
};

export default App;
