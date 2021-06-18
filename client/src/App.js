import React from 'react';
import './App.css';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Route path='/'><Login /></Route>
            <Route path='/admin'><AdminDash /></Route>
        </Router>
    );
};

export default App;
