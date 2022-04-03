const { join } = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config();

const { PORT, NODE_ENV } = process.env;

const app = express();

app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');
// app.use(express.urlencoded({ extends: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set('port', PORT || 3001);

app.use('/api/v1', router);

if (NODE_ENV === 'prod') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
