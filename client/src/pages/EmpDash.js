import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper
} from '@material-ui/core';
import Weather from '../components/Weather';
import JobsList from '../components/JobsList';
import Copyright from '../components/Copyright';
import API from '../utils/API';
import Schedule from '../components/Schedule';

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

function EmpDash({user}) {
    

    const classes = useStyles();

    // const [ user, setUser ] = useState( {} );
    console.log(user)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>

                <div className={classes.appBarSpacer} />
                <Weather id='module-weather'/>
                {/* <Container maxWidth="lg" className={classes.container} > */}
                <Paper className={classes.paper} id='module-schedule'>
                    <Typography variant='h5' className='module-header' id='this-week'>This Week</Typography>
                    <Schedule />
                </Paper>
                <Paper className={classes.paper} id='module-activejobs'>
                    <Typography variant='h5' className='module-header' id='active'>Active</Typography>
                    <JobsList user={user} inputDisabled='true'/>
                </Paper>
                <Paper className={classes.paper} id='module-completedjobs'>
                    <Typography variant='h5' className='module-header' id='completed'>Completed</Typography>
                </Paper>
                <Copyright />
                {/* </Container> */}

            </main>
        </div>
    );
};

export default EmpDash;
