import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Paper,
    Typography,
    // Button
} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsForm from '../components/JobsForm';

import { Redirect } from 'react-router-dom';

import API from '../utils/API';

//TODO: handleSubmit
            //write API.createJob (post request to api/jobs) x
            //write function to access form data from JobsForm.js ?
            //clickEvent to send data & redirect to Admin dashboard x
    //go to JobsForm.js for next steps

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
    // button: {
    //     margin: theme.spacing(2),
    //     width: '7rem'
    // },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function CreateJob() {
    const classes = useStyles()

    const [formObject, setFormObject] = useState({})

    //create a new job using form data, send data to back end
    function handleSubmit(event) {
        event.preventDefault()
        API.createJob({
            quote: formObject.quote,
            start: formObject.start,
            end: formObject.end,
            contact: formObject.contact,
            phone: formObject.phone,
            email: formObject.email,
            work: formObject.work,
            notes: formObject.notes
        })
            .then(alert("Job created successfully!"))
            .then(<Redirect to="/admin"></Redirect>)
    }

    //access formData from child component(JobsForm)
    const getFormData = (formData) => {
        setFormObject({...formObject,
            quote: formData.quote,
            start: formData.start,
            end: formData.end,
            contact: formData.contact,
            phone: formData.phone,
            email: formData.email,
            work: formData.work,
            notes: formData.notes
        })
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Create New Job</Typography>
                        <JobsForm dataRequest = {getFormData}/>
                        {/* <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button> */}
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div >
    )
};
