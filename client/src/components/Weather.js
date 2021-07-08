import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Container
    // Button
} from '@material-ui/core';
// import moment from 'moment';
// import Moment from 'react-moment';
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
export default function Weather ( props ) {

    const classes = useStyles();
    // const currentDateTime = moment();
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
                uvi: res.current.uvi,
                descr: res.current.weather[ 0 ].description,
                icon: res.current.weather[ 0 ].icon,
                // hourly_datetime: res.hourly[0].dt,
                hourly: res.hourly,
                main: res.current.weather[0].main,
                humidity: res.current.humidity
            } ) );
    };

    const iconImgSrc = `http://openweathermap.org/img/w/${ responseObj.icon }.png`;

    return (

        <Paper elevation={3} className={classes.paper} id='module-weather'>

            <div className='weather-text' id=''>
                <span id='feels-like'>Feels like</span>
                <span id='main-temp-disp'>{responseObj.feelslike}&#176;</span>
            </div>

            <div className='weather-text' id='weather-summary'>
                <img src={iconImgSrc} alt='' className='weatherIcon' />
                <div className='weatherDescr'>

                    <span className='weather-params' id='high-low'>{responseObj.feelslike}&#176;/{responseObj.temp}&#176;</span><br />
                    <div className='weather-params'>Humidity: {responseObj.humidity}%<br />
                        Wind: {responseObj.wind}m/h<br />
                        UV index: {responseObj.uvi}
                    </div>

                </div>
            </div>

        </Paper>
    );
}
