import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper,
    // Button
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsList from '../components/JobsList';
import API from '../utils/API';
import TimeWeather from '../components/TimeWeather';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        margin: theme.spacing( 2 )
    },
    button: {
        margin: theme.spacing( 2 )
    },
    paper: {
        padding: theme.spacing( 2 ),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
} ) );

function EmpDash(props) {
    console.log( props );

    const classes = useStyles();

    const [ user, setUser ] = useState( {} );

    // useEffect( () => {
    //     getUser();
    // }, [] );

    // function getUser () {
    //     API.getUser()
    //         .then( res => setUser( res.data ) )
    //         .catch( err => console.log( err ) );
    // }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar className="topToolbar" linkHidden='true'/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container} >
                    <TimeWeather />

                    {/* <Link to='/createjob'>
                        <Button variant="contained" color="primary">
                            Create New Job
                        </Button>
                    </Link> */}

                    {/* ""} */}
                    {/* Active Jobs */}
                    {/* <Button variant="contained" color="primary" onClick={() => { window.location.replace('/createjob') }}>
                        Create New Job
                    </Button> */}

                    <Paper className={classes.paper} id='module1'>
                        <Typography className='module-header' variant='h5'>Assigned Jobs</Typography>
                        <JobsList inputDisabled='true'/>
                        {/*TODO: pass props through jobs list to render assigned jobs for specific crew or employee */}

                    </Paper>
                    {/* Completed Jobs */}
                    <Paper className={classes.paper} id='module2'>
                        <Typography className='module-header' variant='h5'>Schedule</Typography>
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div>
    );
};

export default EmpDash;
