import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper
} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import ActiveJobsList from '../components/ActiveJobsList';

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
            <MenuToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* Time and Weather */}
                    {/* Button to Create New Job */}
                    {/* Active Jobs */}
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Active Jobs</Typography>
                        <ActiveJobsList />
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
