const express = require("express");
const cors = require("cors");
const searchRouter = require("./routers/searchRouter");
const weatherRouter = require("./routers/weatherRouter");

const port = process.env.port || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/search", searchRouter);
app.use("/weather", weatherRouter);

app.listen(port, () => console.log("server is running"));
