const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");


//Middleware
app.use(cors()); //what does this do?
app.use(bodyParser.json()); //what does this do?

//Serving React Build via Express.js
app.use('/', express.static(path.join(__dirname + "/client/build")));

//Twitter.
const contentSearchRoute = require('./routes/contentSearchRoutes');
app.use("/api/search", contentSearchRoute);

const userSearchRoute = require('./routes/userSearchRoutes');
app.use("/api/search", userSearchRoute);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));