import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper
} from '@material-ui/core';
import TimeWeather from '../components/TimeWeather';
import JobsList from '../components/JobsList';
import Copyright from '../components/Copyright';
import API from '../utils/API';

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
        // margin: theme.spacing( 2 )
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
                <TimeWeather />
                <Container maxWidth="lg" className={classes.container} >

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
