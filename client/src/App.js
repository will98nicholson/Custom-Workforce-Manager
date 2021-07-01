import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmpDash from './pages/EmpDash';
import CreateJob from './pages/CreateJob';
// import EditJob from './pages/EditJob';
import JobDetail from './pages/JobDetail';
// import EmpJobDetail from './pages/EmpJobDetail';
import Crews from './pages/Crews';
// import API from '.utils/API';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    // Link
} from 'react-router-dom';
// import Review from '.pages/JobDetail';

// TODO: get react router working
function App() {
    const [user, setUser] = useState(null);
    // const [job, setJob] = useState([]);
    useEffect(() => { getUser() }, [])

    const getUser = async () => {
        await axios({
            method: "GET",

            url: '/auth/user'
        }).then(res => {
            setUser(res.data)
        })

            .catch(err => console.log(err));

    };
    // API.getJob()
    //     .then((res) => {
    //         console.log(res)
    //         setJob(res.data)
    //     })
    //     .catch(err => console.log(err));

    // console.log(user);

    // console.log(user.type)

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
                    <Route path='/crews'>{user.type === "Administrator" ? <Crews /> : ""} </Route>
                    <Route path='/jobdetail/:id'><JobDetail /></Route><Redirect to="/"></Redirect>

                    {/* NOTE: empjobdetail page is for testing + development - figure out logic + props for rendering differently based on user-type */}
                    {/* <Route path='/empjobdetail'>{user.type === "Employee" ? <EmpJobDetail /> : ""} </Route> */}

                </Switch>}
        </Router>
    );
};


export default App;

//switch statement - if not logged in, redirect to login page
//
