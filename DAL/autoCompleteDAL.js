const axios = require("axios");

const getAutoComplete = (searchTerm) => {
    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.apiKey}&q=${searchTerm}`)
}

module.exports = { getAutoComplete };
