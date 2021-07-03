import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Container
    // Button
} from '@material-ui/core';
import moment from 'moment';
import Moment from 'react-moment';
import Forecast from '../utils/Forecast';


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
    const currentDateTime = moment();




    return (

        <Paper elevation={3} className={classes.paper} id='module5'>
            <Typography variant='h5'><Moment format='ll, h:MM:ss a'>{currentDateTime}</Moment></Typography>
            <br /><br />
            <Forecast />
        </Paper>
    )
}
