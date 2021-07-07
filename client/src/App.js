import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import MenuToolbar from './components/MenuToolbar';
import Dashboard from './pages/Dashboard';
import EmpDash from './pages/EmpDash';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import Form from './pages/Form'
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
import { useRadioGroup } from '@material-ui/core';
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

    console.log(user);

    // console.log(user.type)

    return (
        <Router>
            {!user &&
                <Switch>
                    <Route exact path='/'><Login setUser={setUser} /></Route>
                    <Redirect to="/"></Redirect>
                </Switch>}
            {user &&
                <>
                    <MenuToolbar linkHidden={user.type === "Administrator" ? false : true} setUser={setUser} />
                    <Switch>
                        <Route exact path={['/', '/dashboard']}>{user.type === "Administrator" ? <Dashboard /> : <EmpDash user={user} />}</Route>
                        {/* <Route exact path='/employee'><EmpDash /></Route> */}
                        <Route exact path='/createjob'>{user.type === "Administrator" ? <CreateJob /> : ""} </Route>
                        <Route exact path='/crews'>{user.type === "Administrator" ? <Crews /> : ""} </Route>
                        <Route exact path='/jobdetail/:id'><JobDetail inputDisabled={user.type === "Employee" ? true : false} /></Route>

                        {/* NOTE: empjobdetail page is for testing + development - figure out logic + props for rendering differently based on user-type */}
                        {/* <Route path='/empjobdetail'>{user.type === "Employee" ? <EmpJobDetail /> : ""} </Route> */}

                        <Route exact path='/form'><Form /></Route>
                        <Route exact path='/jobdetail' component={() => <JobDetail user={user} />}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </>
            }

        </Router>
    );
};


export default App;

//switch statement - if not logged in, redirect to login page
//
