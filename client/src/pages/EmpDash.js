import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper
} from '@material-ui/core';

import EmployeeToolbar from '../components/EmployeeToolbar';
import Copyright from '../components/Copyright';
import JobsList from '../components/JobsList';

const drawerWidth = 240;

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
    paper: {
        padding: theme.spacing( 2 ),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function AdminDash() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <EmployeeToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* Time and Weather */}
                    {/* Button to Create New Job */}
                    {/* Active Jobs */}
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>My Jobs</Typography>
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
