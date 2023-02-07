const currentDAL = require("../DAL/currentDAL");
const forecastDAL = require("../DAL/forecastDAL");

let cityKeyDefault = "213225"; //Jerusalem
let cityNameDefault = "Jerusalem";
const iconSite = "https://developer.accuweather.com/sites/default/files/";

const getCurrentWeather = async (cityKey = cityKeyDefault, cityName = cityNameDefault, country) => {
    const { data } = await currentDAL.getCurrentWeather(cityKey);
    const { WeatherText: text, WeatherIcon: icon, Temperature } = data[0];
    const iconUrl = iconSite + String(icon).padStart(2, '0') + "-s.png";
    return {
        text, iconUrl, metric: Temperature.Metric.Value, cityKey, cityName, country
    };
}

const getForecast = async (cityKey = cityKeyDefault) => {
    const res = await forecastDAL.getForecast(cityKey);
    const data = res.data.DailyForecasts;
    const forecastArray = data.map(day => {
        const icon = day.Day.Icon;
        const iconUrl = iconSite + String(icon).padStart(2, '0') + "-s.png";
        return {
            date: day.Date, min: day.Temperature.Minimum.Value, max: day.Temperature.Maximum.Value,
            iconUrl, dayText: day.Day.IconPhrase, nightText: day.Night.IconPhrase
        }
    })
    return forecastArray;
}

const homeData = async ({ cityKey, cityName, country }) => {
    const current = await getCurrentWeather(cityKey, cityName, country);
    const forecast = await getForecast(cityKey);
    return { current, forecast };
}

const favoritesData = async (favoriteCities) => {
    const citiesData = [];
    for (const city of favoriteCities) {
        const res = await getCurrentWeather(city.key, city.name, city.country);
        citiesData.push(res)
    }
    return citiesData;
}

module.exports = { homeData, favoritesData };
