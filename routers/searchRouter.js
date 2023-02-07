const express = require("express");
const searchBL = require("../BL/searchBL");
const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
        const {q} = req.query;
        const resp = await searchBL.getAutoComplete(q);
        res.json(resp);
    } catch (error) {
        res.json(error.code);
    }
})

module.exports = router;
