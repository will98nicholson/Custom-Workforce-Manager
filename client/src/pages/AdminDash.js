import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper,
    Button,
} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsList from '../components/JobsList';

const useStyles = makeStyles((theme) => ({
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
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing( 2 ),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

function Auth() {
    
}


export default function AdminDash() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container} >
                    {/* Time and Weather */}
                    {/* Button to Create New Job */}
                    <Button variant="contained" color="primary" onClick={() => { window.location.replace('/createjob') }}>
                        Create New Job
                    </Button>
                    {/* Active Jobs */}
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Active Jobs</Typography>
                        <JobsList />
                    </Paper>
                    {/* Completed Jobs */}
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Completed Jobs</Typography>
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div>
    );
}
