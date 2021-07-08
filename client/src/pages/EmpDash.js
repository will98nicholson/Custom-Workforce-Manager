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

function EmpDash(props) {
    console.log( props );

    const classes = useStyles();

    const [ user, setUser ] = useState( {} );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
        
                <div className={classes.appBarSpacer} />
                <Weather id='module-weather'/>
                {/* <Container maxWidth="lg" className={classes.container} > */}
                <Paper className={classes.paper} id='module-schedule'>
                    <Typography variant='h5' className='module-header'>This Week</Typography>
                    <Schedule />
                </Paper>
                <Paper className={classes.paper} id='module-activejobs'>
                    <Typography variant='h5' className='module-header'>{props.user.username} Active Jobs</Typography>
                    <JobsList inputDisabled='true' user={props.user.username}/>
                </Paper>
                <Paper className={classes.paper} id='   module-completedjobs'>
                    <Typography variant='h5' className='module-header'>Completed</Typography>
                </Paper>
                <Copyright />
                {/* </Container> */}

            </main>
        </div>
    );
};

export default EmpDash;
