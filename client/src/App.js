import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
<<<<<<< HEAD
import Form from './pages/Form'
=======
import JobDetail from './pages/JobDetail';
import EmpDash from './pages/EmpDash';
import Crews from './pages/Crews';
// import API from '.utils/API';
import axios from 'axios';

>>>>>>> 347708b624a28e79787642666e8b068fbf1c1b70
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
<<<<<<< HEAD
            <Route exact path='/'><Login /></Route>
            <Route exact path='/admin'><AdminDash /></Route>
            <Route path='/createjob'><CreateJob /></Route>
            <Route path='/editjob'><EditJob /></Route>
            <Route path='/form'><Form /></Route>
=======
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
                    <Route path='/jobdetail'><JobDetail /></Route><Redirect to="/"></Redirect>
                </Switch>}
>>>>>>> 347708b624a28e79787642666e8b068fbf1c1b70
        </Router>
    );
};


export default App;

//switch statement - if not logged in, redirect to login page
//
