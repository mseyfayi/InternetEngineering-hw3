require('dotenv').config();
const express = require('express');
const setRoutes = require('./routes');
const setMiddleware = require('./middleware');

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

setMiddleware(app);
setRoutes(app);

app.listen(port);