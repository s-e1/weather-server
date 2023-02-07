const express = require("express");
const weatherBL = require("../BL/weatherBL");
const router = express.Router();

router.route("/home").post(async (req, res) => {
    try {
        const cityObj = req.body;
        const resp = await weatherBL.homeData(cityObj);
        res.json(resp);
    } catch (error) {
        res.json(error.code);
    }
})

router.route("/favorites").post(async (req, res) => {
    try {
        const favoriteCities = req.body;
        const resp = await weatherBL.favoritesData(favoriteCities);
        res.json(resp);
    } catch (error) {
        res.json(error.code);
    }
})

module.exports = router;
