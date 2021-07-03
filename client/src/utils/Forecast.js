import React, { useState } from 'react';


const Forecast = () => {

    let [ responseObj, setResponseObj ] = useState( {} );

    // *NOTE: Long version
    // getUsers: function(){
    //     return fetch();
    // }

    //*ES6 shorthand
    function getForecast () {
        return fetch( 'https://api.openweathermap.org/data/2.5/weather?q=columbus&units=imperial&appid=c6a9bf78cf3b504fe7e8382ca53765c4' )
            .then( response => response.json() )
            .then( response => {
                setResponseObj (response)
            })
    };

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify( responseObj )}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>

    )
};

export default Forecast;
