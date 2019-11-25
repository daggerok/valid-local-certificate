const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const express = require('express');

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || '443';
const certOptions = {
    key: fs.readFileSync(path.resolve(`${__dirname}/certs/server.key`)),
    cert: fs.readFileSync(path.resolve(`${__dirname}/certs/server.crt`))
};

https.createServer(certOptions, app).listen(port);
