
const weatherAPI = {

    getForecast(weatherdata) {
        return fetch( 'https://api.openweathermap.org/data/2.5/onecall?lat=39.96&lon=-82.99&units=imperial&exclude=hourly,minutely&appid=54c7f1b6568fcc4d72410e2cea13a78a' );
    }
};

export default weatherAPI;
