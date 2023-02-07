const axios = require("axios");

const getCurrentWeather = (cityKey) => {
    return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.apiKey}`);
}

module.exports = { getCurrentWeather };
