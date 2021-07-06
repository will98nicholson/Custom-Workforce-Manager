import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Container
    // Button
} from '@material-ui/core';
import moment from 'moment';
import Moment from 'react-moment';
import weatherAPI from '../utils/weatherAPI';


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
    let [ responseObj, setResponseObj ] = useState( {} );

    useEffect( () => {
        handleForecastData();
    }, [] );

    function handleForecastData () {
        weatherAPI.getForecast()
            .then( res => res.json() )
            .then( res => setResponseObj( {
                current: res.current,
                temp: res.current.temp,
                feelslike: res.current.feels_like,
                wind: res.current.wind_speed,
                descr: res.current.weather[ 0 ].description,
                icon: res.current.weather[0].icon
            } ) );
        console.log( responseObj );
    };

    return (

        <Paper elevation={3} className={classes.paper} id='module5'>
            <Typography variant='h5'><Moment format='ll, h:MM:ss a'>{currentDateTime}</Moment></Typography>
            <br /><br />
            <p ></p>

        </Paper>
    );
}
