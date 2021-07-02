import React, { useState } from 'react';
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
    InputAdornment,
} from '@material-ui/core';
//for redirect on form submit
import { useHistory } from 'react-router-dom';
//phone number formatting
import TextMaskCustom from './TextMaskCustom';
//multi-select for services
import FormSelect from './FormSelect';

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
        minHeight: "4rem",
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
        width: '7rem',
        color: '#ffffff'
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

    const history = useHistory();

    //redirect route defined in parent page
    const route= props.route

    const [formObject, setFormObject] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    useEffect( () => { getJob(); }, [] );

    const getJob = async () => {
        await axios( {
            method: "GET",
            url: `/api/jobs/${ props.id }`
        } ).then( res => {
            console.log( res.data );
            setFormObject( {
                name: res.data[ 0 ].client.name,
                type: res.data[ 0 ].client.type,
                location: res.data[ 0 ].client.location,
                contact: res.data[ 0 ].client.contact,
                phone: res.data[ 0 ].client.phone,
                email: res.data[ 0 ].client.email,

                quote_date: res.data[ 0 ].quote,
                quote_price: res.data[ 0 ].price,
                start_date: res.data[ 0 ].start,
                end_date: res.data[ 0 ].end,

                description: res.data[0].work,
                notes: res.data[0].notes
            } );
        } )

            .catch( err => console.log( err ) );

    };

    function handleSubmit(event) {
        event.preventDefault()
        props.APIFunction({
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

            description: formObject.work,
            notes: formObject.notes
        })
            .then((res) => {
                console.log(res.data);
                //use react-router-dom history to generate route
                let url= res.data.id + {route}
                history.push(url)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={classes.root}>
            <form name="job-details">
                {/* <FormControl disabled>
                    <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
                    <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" placeholder={jobNumber} />
                </FormControl> */}


                {/* CLIENT NAME */}
                <FormControl className={classes.input}>
                    <InputLabel className={classes.formControl} htmlFor="clientName"> Client Name</InputLabel>

                    <OutlinedInput
                        id="clientName"
                        name="name"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        label="Client Name" />
                </FormControl>

                {/* CLIENT TYPE */}
                <FormControl variant="outlined" className={classes.input}>

                    <InputLabel id="clientType">Client Type</InputLabel>
                    <Select
                        labelId="clientType"
                        id="clientType"
                        name="type"
                        onChange={handleInputChange}
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        label="Client Type"
                        className='form-input-positioning'
                        placeholder='Client Type'
                        value={formObject.type}
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
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        className={classes.textField, classes.input}
                        defaultValue={new Date()}
                        className={classes.textField}
                        className={classes.input}
                        value={formObject.quote_date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                {/* QUOTE PRICE */}
                <FormControl>
                    <InputLabel htmlFor="quotePrice">Quote Price</InputLabel>
                    <OutlinedInput
                        id="quotePrice"
                        name="price"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        disabled={props.setDisable}
                        label="Quote Price"
                        value={formObject.quote_price}
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
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        className={classes.textField, classes.input}
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
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        className={classes.textField, classes.input}
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
                    <InputLabel htmlFor="contactName">Point of Contact</InputLabel>
                    <OutlinedInput
                        id="contactName"
                        name="contact"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        label="Point of Contact"
                        value={formObject.contact}
                    />
                </FormControl>

                {/* CONTACT PHONE */}
                <FormControl>
                    <InputLabel htmlFor="contactPhone">Contact Phone</InputLabel>
                    <OutlinedInput
                        id="contactPhone"
                        name="phone"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        inputComponent={TextMaskCustom}
                        label="Contact Phone"
                        value={formObject.phone}
                    />
                </FormControl>

                {/* CONTACT EMAIL */}
                <FormControl>
                    <InputLabel htmlFor="contactEmail">Contact Email</InputLabel>
                    <OutlinedInput
                        id="contactEmail"
                        name="email"
                        onChange={handleInputChange}
                        className={classes.input}
                        variant="outlined"
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        label="Contact Email"
                        value={formObject.email}
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
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        placeholder="123 Lawncare Lane, Greenville, OH 45331"
                        variant="outlined"
                    />
                </FormControl>

                <div className={classes.break} />

                <Typography variant="body1">Select Services:</Typography>
                  {/* Change to checklist with service names */}


                {/* JOB DESCRIPTION */}
                <FormControl>
                    <FormSelect
                        id="workDescription"
                        name="work"
                        onChange={handleInputChange}
                        className={classes.input}
                        multiline
                        rows={4}
                        placeholder="Describe Approved Work"
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        variant="outlined"
                        value={formObject.description}
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
                        disabled={props.setDisable}
                        defaultValue={props.setDefaultValue}
                        variant="outlined"
                        value={formObject.notes}
                    />
                </FormControl>

                <div className={classes.break} />

                {/* SAVE / SUBMIT BUTTON */}
                <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                {/* TODO: if employee, only NOTES are editable and should be saved and updated in db */}
                {/* TODO: if employee, maybe only render a "save" button until job is marked as "completed" */}
                {/* TODO: maybe a "job status" in job model w 3 options - todo, in progress, completed + once emp clicks
                the completed button, either the submit button renders so send to admin,
                or the form is submitted when the complete status is met and the button is clicked */}

            </form>
        </div>
    );
}


// import React, { useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     OutlinedInput,
//     InputLabel,
//     FormControl,
//     MenuItem,
//     Select,
//     Typography,
//     TextField,
//     Button,
//     InputAdornment
// } from '@material-ui/core';

// import { Redirect } from 'react-router-dom';
// import axios from 'axios';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'row',
//         '& > *': {
//             margin: theme.spacing(2),
//         },
//     },
//     input: {
//         width: '60vw',
//         margin: theme.spacing(1, 2, 1, 0),
//         [theme.breakpoints.up('md')]: {
//             width: '40vw'
//         },
//         [theme.breakpoints.up('lg')]: {
//             width: '20vw'
//         }
//     },
//     TextField: {
//         width: '60vw',
//         margin: theme.spacing(1, 2, 1, 0)
//     },
//     button: {
//         margin: theme.spacing(2),
//         width: '7rem'
//     },
//     container: {
//         margin: theme.spacing(2)
//     },
//     break: {
//         flexBasis: '100%',
//         height: 0
//     }
// }));

// /// *** NOTES: ***
// /// - auto increment job number
// /// - jobs form is same form for create job, edit job, and job details
// ///     *use props to set different states for different editing accessiblity
// ///     * admin create job + edit
// ///     * employee - edit in job details: notes, job desc, action taken
// ///         * maybe ability to send request for job to be edited


// export default function JobsForm(props) {
//     const classes = useStyles();

//     const [formObject, setFormObject] = useState({})

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })
//     }
//     useEffect( () => { getJob(); }, [] );

//     const getJob = async () => {
//         await axios( {
//             method: "GET",

//             url: `/api/jobs/${ props.id }`
//         } ).then( res => {
//             console.log( res.data );
//             setFormObject( {
//                 name: res.data[0].client.name,
//                 location: res.data[0].client.location,
//             } );
//         } )

//             .catch( err => console.log( err ) );

//     };
//     function handleSubmit(event) {
//         event.preventDefault()
//         props.APIFunction({
//             client: {
//                 type: formObject.type,
//                 name: formObject.name,
//                 location: formObject.address,
//                 contact: formObject.contact,
//                 phone: formObject.phone,
//                 email: formObject.email,
//             },

//             quote_date: formObject.quote,
//             quote_price: formObject.price,
//             start_date: formObject.start,
//             end_date: formObject.end,

//             description: formObject.work,
//             notes: formObject.notes
//         })
//             .then((res) => console.log(res))
//             // .then(<Redirect to="/admin"></Redirect>)
//             .catch((err) => console.log(err))
//     }

//     return (
//         <div className={classes.root}>
//             <form className='form-flex' name="job-details">

//                 {/* <FormControl disabled>
//                     <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
//                     <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" placeholder={jobNumber} />
//                 </FormControl> */}
//                 <FormControl className={classes.formControl}>
//                     <InputLabel className={classes.formControl} htmlFor="clientName"> Client Name</InputLabel>
//                     <OutlinedInput
//                         id="clientName"
//                         name="name"
//                         onChange={handleInputChange}
//                         className={classes.input}
//                         variant="outlined"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Client Name" />
//                 </FormControl>

//                 <FormControl variant="outlined" className={classes.input}>
//                     <InputLabel id="clientType">Client Type</InputLabel>
//                     <Select
//                         labelId="clientType"
//                         id="clientType"
//                         name="type"
//                         onChange={handleInputChange}
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Client Type"
//                         className='form-input-positioning'
//                         placeholder='Client Type'
//                     >
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={"Residential"}>Residential</MenuItem>
//                         <MenuItem value={"Commercial"}>Commercial</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <div className={classes.break} />

//                 <FormControl>
//                     <TextField variant="outlined"
//                         id="quoteDate"
//                         name="quote"
//                         onChange={handleInputChange}
//                         label="Quote Date"
//                         type="date"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         className={classes.textField, classes.input}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                 </FormControl>

//                 <FormControl>
//                     <InputLabel htmlFor="quotePrice">Quote Price</InputLabel>
//                     <OutlinedInput
//                         id="quotePrice"
//                         name="price"
//                         onChange={handleInputChange}
//                         className={classes.input}
//                         variant="outlined"
//                         startAdornment={<InputAdornment position="start">$</InputAdornment>}
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Quote Price" />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <FormControl>
//                     <TextField variant="outlined"
//                         id="startDate"
//                         name="start"
//                         onChange={handleInputChange}
//                         label="Job Start"
//                         type="datetime-local"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         className={classes.textField, classes.input}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                 </FormControl>

//                 <FormControl>
//                     <TextField variant="outlined"
//                         id="endDate"
//                         name="end"
//                         onChange={handleInputChange}
//                         label="Job End"
//                         type="datetime-local"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         className={classes.textField, classes.input}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <Typography variant="body1">Contact Information:</Typography>

//                 <FormControl>
//                     <InputLabel htmlFor="contactName">Point of Contact</InputLabel>
//                     <OutlinedInput
//                         id="contactName"
//                         name="contact"
//                         onChange={handleInputChange}
//                         className={classes.input}
//                         variant="outlined"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Point of Contact" />
//                 </FormControl>

//                 <FormControl>
//                     <InputLabel htmlFor="contactPhone">Contact Phone</InputLabel>
//                     <OutlinedInput
//                         id="contactPhone"
//                         name="phone"
//                         onChange={handleInputChange}
//                         className={classes.input}
//                         variant="outlined"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Contact Phone" />
//                 </FormControl>

//                 <FormControl>
//                     <InputLabel htmlFor="contactEmail">Contact Email</InputLabel>
//                     <OutlinedInput
//                         id="contactEmail"
//                         name="email"
//                         onChange={handleInputChange}
//                         className={classes.input}
//                         variant="outlined"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         label="Contact Email" />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <Typography variant="body1">Job Location:</Typography>

//                 <FormControl>
//                     <TextField
//                         id="jobLocation"
//                         name="address"
//                         onChange={handleInputChange}
//                         className={classes.TextField}
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         placeholder="123 Lawncare Lane, Greenville, OH 45331"
//                         variant="outlined"
//                         value={formObject.location}
//                     />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <Typography variant="body1">Scope of Work:</Typography>

//                 <FormControl>
//                     <TextField
//                         id="workDescription"
//                         name="work"
//                         onChange={handleInputChange}
//                         className={classes.TextField}
//                         multiline
//                         rows={4}
//                         placeholder="Describe Approved Work"
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         variant="outlined"
//                     />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <Typography variant="body1">Notes:</Typography>

//                 <FormControl>
//                     <TextField
//                         id="notes"
//                         name="notes"
//                         onChange={handleInputChange}
//                         className={classes.TextField}
//                         multiline
//                         rows={4}
//                         placeholder="Directions, special considerations, etc."
//                         disabled={props.setDisable}
//                         defaultValue={props.setDefaultValue}
//                         variant="outlined"
//                     />
//                 </FormControl>

//                 <div className={classes.break} />

//                 <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </form>
//         </div>
//     );
// }
