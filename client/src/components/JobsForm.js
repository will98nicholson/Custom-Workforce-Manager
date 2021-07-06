import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    OutlinedInput,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    Typography,
    TextField,
    Button,
    InputAdornment
} from '@material-ui/core';

import { Redirect, useLocation } from 'react-router-dom';
import axios from 'axios';
import InvoiceModal from '../components/InvoiceModal';


const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing( 2 ),
        },
    },
    input: {
        width: '60vw',
        margin: theme.spacing( 1, 2, 1, 0 ),
        [ theme.breakpoints.up( 'md' ) ]: {
            width: '40vw'
        },
        [ theme.breakpoints.up( 'lg' ) ]: {
            width: '20vw'
        }
    },
    TextField: {
        width: '60vw',
        margin: theme.spacing( 1, 2, 1, 0 )
    },
    button: {
        margin: theme.spacing( 2 ),
        width: '7rem'
    },
    container: {
        margin: theme.spacing( 2 )
    },
    break: {
        flexBasis: '100%',
        height: 0
    }
} ) );

/// *** NOTES: ***
/// - auto increment job number
/// - jobs form is same form for create job, edit job, and job details
///     *use props to set different states for different editing accessiblity
///     * admin create job + edit
///     * employee - edit in job details: notes, job desc, action taken
///         * maybe ability to send request for job to be edited


export default function JobsForm ( props ) {
    const classes = useStyles();

    const [ formObject, setFormObject ] = useState( {} );
    const location = useLocation();
    console.log( location.pathname );
    const handleInputChange = ( event ) => {
        const { name, value } = event.target;
        setFormObject( { ...formObject, [ name ]: value } );
    };
    useEffect( () => { if(props.id) getJob(); }, [] ); //only run useEffect if coming from jobdetail page

    //set state for invoice modal
    //handleOpen + handleClose functions
    const [ open, setOpen ] = React.useState( false );

    const handleOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    const getJob = async () => {
        await axios( {
            method: "GET",

            url: `/api/jobs/${ props.id }`
        } ).then( res => {
            console.log( res.data );
            setFormObject( {
                name: res.data[ 0 ].client.name,
                type: res.data[ 0 ].client.type,
                location: res.data[ 0 ].client.location.streetAddress,
                contact: res.data[ 0 ].client.contact,
                phone: res.data[ 0 ].client.phone,
                email: res.data[ 0 ].client.email,

                quote_date: res.data[ 0 ].quote,
                quote_price: res.data[ 0 ].price,
                start_date: res.data[ 0 ].start,
                end_date: res.data[ 0 ].end,

                description: res.data[ 0 ].work,
                notes: res.data[ 0 ].notes
            } );
        } )

            .catch( err => console.log( err ) );

    };
    function handleSubmit ( event ) {
        event.preventDefault();
        props.APIFunction( {
            client: {
                type: formObject.type,
                name: formObject.name,
                location: formObject.location,
                contact: formObject.contact,
                phone: formObject.phone,
                email: formObject.email,
            },

            quote_date: formObject.quote,
            quote_price: formObject.price,
            start_date: formObject.start,
            end_date: formObject.end,

            description: formObject.description,
            notes: formObject.notes
        } )
            .then( ( res ) => console.log( res ) )
            // .then(<Redirect to="/admin"></Redirect>)
            .catch( ( err ) => console.log( err ) );
    }

    return (
        <div className={classes.root}>
            <form className='form-flex' name="job-details">

                {/* <FormControl disabled>
                    <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
                    <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" placeholder={jobNumber} />
                </FormControl> */}

                {/* CLIENT NAME */}
                <FormControl className={classes.formControl}>
                    <InputLabel shrink className={classes.formControl} htmlFor="clientName"> Client Name</InputLabel>
                    <OutlinedInput
                        id="clientName"
                        name="name"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        // placeholder="Client Name"
                        // className='form-input-positioning'
                        value={formObject.name}
                        label='clientName'
                        disabled={props.inputDisabled}

                    />
                </FormControl>

                {/* CLIENT TYPE */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink variant='outlined' id="clientType">Client Type</InputLabel>
                    <Select
                        labelId="clientType"
                        id="clientType"
                        name="type"
                        onChange={handleInputChange}
                        label="Client Type"
                        // className='form-input-positioning'
                        placeholder='Client Type'
                        value={formObject.type}
                        disabled={props.inputDisabled}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Residential"}>Residential</MenuItem>
                        <MenuItem value={"Commercial"}>Commercial</MenuItem>
                    </Select>
                </FormControl>

                <div className={classes.break} />

                {/* QUOTE DATE */}
                <FormControl>
                    <TextField variant="outlined"
                        id="quoteDate"
                        name="quote"
                        onChange={handleInputChange}
                        label="Quote Date"
                        type="date"
                        defaultValue={new Date()}
                        className={classes.textField}
                        className={classes.input}
                        value={formObject.quote_date}
                        disabled={props.inputDisabled}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                {/* QUOTE PRICE */}
                <FormControl>
                    <InputLabel shrink htmlFor="quotePrice">Quote Price</InputLabel>
                    <OutlinedInput
                        id="quotePrice"
                        name="price"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Quote Price"
                        value={formObject.quote_price}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                <div className={classes.break} />

                {/* JOB START */}
                <FormControl>
                    <TextField variant="outlined"
                        id="startDate"
                        name="start"
                        onChange={handleInputChange}
                        label="Job Start"
                        type="datetime-local"
                        defaultValue={new Date()}
                        className={classes.textField}
                        className={classes.input}
                        value={formObject.start_date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                {/* JOB END */}
                <FormControl>
                    <TextField variant="outlined"
                        id="endDate"
                        name="end"
                        onChange={handleInputChange}
                        label="Job End"
                        type="datetime-local"
                        defaultValue={new Date()}
                        className={classes.textField}
                        className={classes.input}
                        value={formObject.end_date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <div className={classes.break} />

                {/* CONTACT INFO */}
                <Typography variant="body1">Contact Information:</Typography>

                {/* CONTACT NAME*/}
                <FormControl>
                    <InputLabel shrink htmlFor="contactName">Point of Contact</InputLabel>
                    <OutlinedInput
                        id="contactName"
                        name="contact"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        label="Point of Contact"
                        value={formObject.contact}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                {/* CONTACT PHONE */}
                <FormControl>
                    <InputLabel shrink htmlFor="contactPhone">Contact Phone</InputLabel>
                    <OutlinedInput
                        id="contactPhone"
                        name="phone"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        label="Contact Phone"
                        value={formObject.phone}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                {/* CONTACT EMAIL */}
                <FormControl>
                    <InputLabel shrink htmlFor="contactEmail">Contact Email</InputLabel>
                    <OutlinedInput
                        id="contactEmail"
                        name="email"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        label="Contact Email"
                        value={formObject.email}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                <div className={classes.break} />

                {/* JOB LOCATION INFO */}
                <Typography variant="body1">Job Location:</Typography>

                {/* JOB LOCATION / ADDRESS */}
                <FormControl>
                    <TextField
                        id="jobLocation"
                        name="location"
                        onChange={handleInputChange}
                        className={classes.TextField}
                        placeholder="123 Lawncare Lane, Greenville, OH 45331"
                        variant="outlined"
                        value={formObject.location}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                <div className={classes.break} />

                <Typography variant="body1">Job Description:</Typography>

                {/* JOB DESCRIPTION */}
                <FormControl>
                    <TextField
                        id="Description"
                        name="description"
                        onChange={handleInputChange}
                        className={classes.TextField}
                        multiline
                        rows={4}
                        placeholder="Describe Approved Work"
                        variant="outlined"
                        value={formObject.description}
                        disabled={props.inputDisabled}
                    />
                </FormControl>

                <div className={classes.break} />

                <Typography variant="body1">Notes:</Typography>
                {/* JOB NOTES */}
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
                        value={formObject.notes}
                    />
                </FormControl>

                <div className={classes.break} />

                {/* SAVE / SUBMIT BUTTON */} {/* for create job */}
                {/* passing user status to add job button - '&&' is a way to short circut and escape the turnary operator as we don't want to render anything in it's place */}
                {props.user === 'Employee' && <Button display="none" className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
                    Add Job
                </Button>}
                {/* if create job submit to database - if job detail create invoice */}
                <Button className={classes.button} variant="contained" color="primary" onClick={ handleOpen }>
                    Create Invoice
                </Button>
                <InvoiceModal open={open} handleClose={handleClose} formObject={formObject}/>
            </form>
        </div>
    );
}
