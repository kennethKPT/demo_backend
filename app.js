const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');

const app = express();

// form data only (x-www-form-urlencoded) app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/api', apiRoutes);

app.listen(8080);