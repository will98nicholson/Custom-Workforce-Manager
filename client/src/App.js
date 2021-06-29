import React from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import JobDetail from './pages/JobDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// import Review from '.pages/JobDetail';

// TODO: get react router working
function App() {
    return (
        <Router>
            <Route exact path='/'><Login /></Route>
            <Route exact path='/dashboard'><Dashboard /></Route>
            {/* <Route exact path='/employee'><EmpDash /></Route> */}
            <Route path='/createjob'><CreateJob /></Route>
            <Route path='/jobdetail'><JobDetail /></Route>
        </Router>
    );
};

export default App;
