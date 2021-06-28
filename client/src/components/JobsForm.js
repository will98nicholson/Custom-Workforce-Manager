import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    OutlinedInput,
    InputLabel,
    FormControl,
    Typography,
    TextField,
    Grid
} from '@material-ui/core';
const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing( 1 ),
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


export default function JobsForm () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form name="job-details">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
                    <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" label="Job Number" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="jobName">Job Name</InputLabel>
                    <OutlinedInput id="jobName" name="job_name" className={classes.input} variant="outlined" label="Job Name" />
                </FormControl>
                <FormControl variant="outlined">
                    <TextField variant="outlined"
                        id="date"
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
                    id="datetime-local"
                    label="Job Start"
                    type="datetime-local"
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
                        id="datetime-local"
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
                <FormControl variant="outlined">
                    <InputLabel htmlFor="PointofContact">Point of Contact</InputLabel>
                    <OutlinedInput id="PointofContact" name="point_of_contact" className={classes.input} variant="outlined" label="Point of Contact" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="ContactPhone">Contact Phone</InputLabel>
                    <OutlinedInput id="ContactPhone" name="contact_phone" className={classes.input} variant="outlined" label="Contact Phone" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="Contact Email">Contact Email</InputLabel>
                    <OutlinedInput id="Contact Email" name="contact_email" className={classes.input} variant="outlined" label="Contact Email" />
                </FormControl>
                <div className={classes.break} />
                <Typography variant="body1">Job Description:</Typography>
                <FormControl variant="outlined">
                    <TextField
                        id="scope-of-work"
                        className={classes.TextField}
                        multiline
                        rows={4}
                        placeholder="Describe Approved Work"
                        variant="outlined"
                    />
                </FormControl>
                <div className={classes.break} />
                <Typography variant="body1">Notes:</Typography>
                <FormControl variant="outlined">
                    <TextField
                        id="scope-of-work"
                        className={classes.TextField}
                        multiline
                        rows={4}
                        placeholder="Directions, special considerations, etc."
                        variant="outlined"
                    />
                </FormControl>
            </form>
        </div>
    );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     OutlinedInput,
//     InputLabel,
//     FormControl,
//     Typography,
//     TextField,
//     Grid
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'row',
//         '& > *': {
//             margin: theme.spacing(1),
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
//     container: {
//         margin: theme.spacing(2)
//     },
//     break: {
//         flexBasis: '100%',
//         height: 0
//     }
// }));

// export default function JobsForm() {
//     const classes = useStyles()
//     return (
//         <div className={classes.root}>
//             <form name="job-details">
//                     <FormControl variant="outlined">
//                         <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
//                         <OutlinedInput id="jobNumber" name="job_number" className={classes.input} variant="outlined" label="Job Number" />
//                     </FormControl>
//                     <FormControl variant="outlined">
//                         <InputLabel htmlFor="quoteDate">Quote Date</InputLabel>
//                         <OutlinedInput id="quoteDate" name="quote_date" className={classes.input} variant="outlined" label="Quote Date" />
//                     </FormControl>
//                     <div className={classes.break} />
//                     <Typography variant="body1">Contact Information:</Typography>
//                     <FormControl variant="outlined">
//                         <InputLabel htmlFor="PointofContact">Point of Contact</InputLabel>
//                         <OutlinedInput id="PointofContact" name="point_of_contact" className={classes.input} variant="outlined" label="Point of Contact" />
//                     </FormControl>
//                     <FormControl variant="outlined">
//                         <InputLabel htmlFor="ContactPhone">Contact Phone</InputLabel>
//                         <OutlinedInput id="ContactPhone" name="contact_phone" className={classes.input} variant="outlined" label="Contact Phone" />
//                     </FormControl>
//                     <FormControl variant="outlined">
//                         <InputLabel htmlFor="Contact Email">Contact Email</InputLabel>
//                         <OutlinedInput id="Contact Email" name="contact_email" className={classes.input} variant="outlined" label="Contact Email" />
//                     </FormControl>
//                     <div className={classes.break} />
//                     <Typography variant="body1">Scope of Work:</Typography>
//                     <FormControl variant="outlined">
//                         <TextField
//                             id="scope-of-work"
//                             className={classes.TextField}
//                             multiline
//                             rows={4}
//                             placeholder="Describe Approved Work"
//                             variant="outlined"
//                         />
//                     </FormControl>
//                     <div className={classes.break} />
//                     <Typography variant="body1">Notes:</Typography>
//                     <FormControl variant="outlined">
//                         <TextField
//                             id="scope-of-work"
//                             className={classes.TextField}
//                             multiline
//                             rows={4}
//                             placeholder="Directions, special considerations, etc."
//                             variant="outlined"
//                         />
//                     </FormControl>
//             </form>
//         </div>
//     )
// }
