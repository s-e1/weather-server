const axios = require("axios");

const getForecast = (cityKey) => {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.apiKey}`)
}

module.exports = { getForecast };