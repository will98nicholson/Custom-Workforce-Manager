import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Paper,
    Typography,
    Button
} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsForm from '../components/JobsForm';

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

function handleSubmit(){
    console.log('submit')
}

export default function CreateJob() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar />
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>Create New Job</Typography>
                    <JobsForm />
                </Paper>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Copyright />
            </Container>
        </div>
    )
};