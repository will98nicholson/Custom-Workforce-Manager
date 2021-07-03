import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    // Button
} from '@material-ui/core';


const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing( 2 ),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
} ) );

export default function TimeWeather ( props ) {

    const classes = useStyles();

    return (
        <Paper className={classes.paper} id='module5'>
            <Typography variant='h5'>Weather Module</Typography>
            {/* <JobsList /> */}
        </Paper>
    )
}
