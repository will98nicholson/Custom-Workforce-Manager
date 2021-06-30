import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import JobDetail from './pages/JobDetail';
import EmpDash from './pages/EmpDash';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-dom';
// import Review from '.pages/JobDetail';

// TODO: get react router working
function App() {
    const [user, setUser] = useState(null);
    useEffect(() => { getUser() }, [])
    const getUser = async () => {
        await axios({
            method: "GET",

            url: '/auth/user'
        }).then(res => {
            setUser(res.data)
        })

            .catch(err => console.log(err));
    }

    console.log(user)
    return (
        <Router>
            {!user &&
                <Switch>
                    <Route exact path='/'><Login setUser={setUser} /></Route>
                    <Redirect to="/"></Redirect>
                </Switch>}
            {user &&
                <Switch>
                    <Route exact path={['/', '/dashboard']}>{user.type === "Administrator" ? <Dashboard /> : <EmpDash user={user} />}</Route>
                    {/* <Route exact path='/employee'><EmpDash /></Route> */}
                    <Route path='/createjob'>{user.type === "Administrator" ? <CreateJob /> : ""} </Route>
                    <Route path='/jobdetail'><JobDetail /></Route><Redirect to="/"></Redirect>
                </Switch>}
        </Router>
    );
};

export default App;

//switch statement - if not logged in, redirect to login page
//
