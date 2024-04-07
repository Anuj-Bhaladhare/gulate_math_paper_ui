const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());

const port = process.env.PORT;

const databaseConnect = require("./config/dbConnect");
databaseConnect();

const router = require("./routes/router");
app.use("/api/v1", router)

app.listen( port, () => {
    console.log(`Server started at port number ${port}`)
})