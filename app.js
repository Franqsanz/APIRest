/* eslint-disable node/no-unpublished-require */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const joi = require('@hapi/joi');
const csurf = require('csurf');
const expressRateLimit = require('express-rate-limit');
const expressMongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();

const config = require('./config/config');
const cities = require('./routes/citiesRoutes');
require('./config/conexionDB');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(
  cors({
    methods: 'GET, POST, OPTIONS, PUT, DELETE'
  })
);
app.use(morgan('dev'));
app.use('/api/v2', cities);

// validacion de campos
/*const schema = joi.object({
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(20)
    .required()
});

schema.validate();*/

app.listen(config.Port, () => console.log(`server on port ${config.Port}`));
