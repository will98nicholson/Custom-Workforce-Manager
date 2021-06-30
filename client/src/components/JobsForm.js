import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    OutlinedInput,
    InputLabel,
    FormControl,
    Typography,
    TextField,
    Button
} from '@material-ui/core';

import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: '60vw',
        margin: theme.spacing(1, 2, 1, 0),
        [theme.breakpoints.up('md')]: {
            width: '40vw'
        },
        [theme.breakpoints.up('lg')]: {
            width: '20vw'
        }
    },
    TextField: {
        width: '60vw',
        margin: theme.spacing(1, 2, 1, 0)
    },
    button: {
        margin: theme.spacing(2),
        width: '7rem'
    },
    container: {
        margin: theme.spacing(2)
    },
    break: {
        flexBasis: '100%',
        height: 0
    }
}));

/// *** NOTES: ***
/// - auto increment job number
/// - jobs form is same form for create job, edit job, and job details
///     *use props to set different states for different editing accessiblity
///     * admin create job + edit
///     * employee - edit in job details: notes, job desc, action taken
///         * maybe ability to send request for job to be edited


export default function JobsForm(props) {
    const classes = useStyles();

    const [formObject, setFormObject] = useState({})

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setFormObject({...formObject, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.APIFunction({
            name: formObject.name,
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

    return (
        <div className={classes.root}>
            <form name="job-details">
                {/* <FormControl disabled>
                    <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
                    <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" placeholder={jobNumber} />
                </FormControl> */}
                <FormControl>
                    <InputLabel htmlFor="jobName">Job Name</InputLabel>
                    <OutlinedInput 
                        id="jobName"
                        name="name"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        label="Job Name" />
                </FormControl>
                <FormControl>
                    <TextField variant="outlined"
                        id="quoteDate"
                        name="quote"
                        onChange={handleInputChange}
                        label="Quote Date"
                        type="date"
                        defaultValue={new Date}
                        className={classes.textField, classes.input}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <div className={classes.break} />
                <FormControl>
                    <TextField variant="outlined"
                        id="startDate"
                        name="start"
                        onChange={handleInputChange}
                        label="Job Start"
                        type="datetime-local"
                        defaultValue={new Date}
                        className={classes.textField, classes.input}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl>
                    <TextField variant="outlined"
                        id="endDate"
                        name="end"
                        onChange={handleInputChange}
                        label="Job End"
                        type="datetime-local"
                        defaultValue={new Date}
                        className={classes.textField, classes.input}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <div className={classes.break} />
                <Typography variant="body1">Contact Information:</Typography>
                <FormControl>
                    <InputLabel htmlFor="contactName">Point of Contact</InputLabel>
                    <OutlinedInput
                        id="contactName" 
                        name="contact" 
                        onChange={handleInputChange}
                        className={classes.input} 
                        variant="outlined" 
                        label="Point of Contact" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="contactPhone">Contact Phone</InputLabel>
                    <OutlinedInput 
                        id="contactPhone"
                        name="phone"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined" 
                        label="Contact Phone" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="contactEmail">Contact Email</InputLabel>
                    <OutlinedInput 
                        id="contactEmail" 
                        name="email" 
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        label="Contact Email" />
                </FormControl>
                <div className={classes.break} />
                <Typography variant="body1">Scope of Work:</Typography>
                <FormControl>
                    <TextField
                        id="workDescription"
                        name="work"
                        onChange={handleInputChange}
                        className={classes.TextField}
                        multiline
                        rows={4}
                        placeholder="Describe Approved Work"
                        variant="outlined"
                    />
                </FormControl>
                <div className={classes.break} />
                <Typography variant="body1">Notes:</Typography>
                <FormControl>
                    <TextField
                        id="notes"
                        name="notes"
                        onChange={handleInputChange}
                        className={classes.TextField}
                        multiline
                        rows={4}
                        placeholder="Directions, special considerations, etc."
                        variant="outlined"
                    />
                </FormControl>
                <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </form>
        </div>
    );
}