const autoCompleteDAL = require("../DAL/autoCompleteDAL");
const searchTermDefault = "Jeru";

const getAutoComplete = async (searchTerm = searchTermDefault) => {
    const { data } = await autoCompleteDAL.getAutoComplete(searchTerm);
    const cityArray = data.map(city => {
        return { key: city.Key, name: city.LocalizedName, country: city.Country.LocalizedName }
    })
    return cityArray;
}

module.exports = {getAutoComplete};