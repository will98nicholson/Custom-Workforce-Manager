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
                icon: res.current.weather[ 0 ].icon,
                // hourly_datetime: res.hourly[0].dt,
                hourly: res.hourly,
                // alert_name: res.alerts[0].event,
                // alert_start: res.alerts[0].start,
                // alert_end: res.alerts[0].end,
                // alert_descr: res.alerts[0].description

            } ) );
    };

    console.log( responseObj.hourly );
    // function renderWeatherUpdate() {
    //     let myDate = new Date( this.state.responseObj.hourly_datetime * 1000 );
    //     document.write( myDate.toString() );
    //     return;
    // };

    // console.log( myDate );

        //EFFORT TO CONVERT HOURLY EPOCH TIMESTAMP TO READABLE DATE
        // function readableDate () => {
        //     let responseObj;
        //     const convertEpoch = new Date( responseObj.hourly * 1000.0 );
        //     document.write( convertEpoch.toLocaleString() );
        // };
        // console.log( readableDate );

    const iconImgSrc = `http://openweathermap.org/img/w/${ responseObj.icon }.png`;

    return (

        <Paper elevation={3} className={classes.paper} id='module5'>
            <Typography id='current-time' variant='h5'><Moment format='ll, h:MM:ss a'>{currentDateTime}</Moment></Typography>
            {/* <br /> */}

            <img src={iconImgSrc} alt='' className='weatherIcon' />

            <div className='weatherDescr'>{responseObj.descr}</div>
            <Typography id='current-weather' variant='h6'>
                Currently {responseObj.temp}&nbsp;&#8457;
                <br />
                Feels like {responseObj.feelslike}&nbsp;&#8457;
            </Typography>
        </Paper>
    );
}
