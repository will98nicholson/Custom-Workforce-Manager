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
    button: {
        margin: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>

                <div className={classes.appBarSpacer} />
                <TimeWeather />
                <Container maxWidth="xl" className={classes.container} >
                    <Paper className={classes.paper} id='module1'>
                        <Typography variant='h5'>Active Jobs</Typography>
                        <JobsList />
                    </Paper>
                    {/* Completed Jobs */}
                    <Paper className={classes.paper} id='module2'>
                        <Typography variant='h5'>Completed Jobs</Typography>
                    </Paper>
                    <Copyright />
                </Container>

            </main>
        </div>
    );
}
