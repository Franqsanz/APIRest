'use strict';
/* eslint-disable prettier/prettier */

const joi = require('@hapi/joi');

const schema = joi.object({
    id: joi.number()
        .required(),
    capital: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo capital es Obligatorio.',
            'string.empty': 'El Campo capital no pude estar vacio.'
        }),
    rank: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Rank es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Rank no pude estar vacio.'
        }),
    latitude: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Latitude es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Latitude no pude estar vacio.'
        }),
    longitude: joi.number()
        .required()
        .messages({
            'number.base': 'El Campo Longitude es Obligatorio y debe ser un Numero.',
            'string.empty': 'El Campo Longitude no pude estar vacio.'
        }),
    populations: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo Populations es Obligatorio.',
            'string.empty': 'El Campo Populations no pude estar vacio.'
        }),
    province: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo Province es Obligatorio.',
            'string.empty': 'El Campo Province no pude estar vacio.'
        }),
    foundation: joi.number()
        .required()
        .messages({
            'string.base': 'El Campo foundation es Obligatorio.',
            'string.empty': 'El Campo foundation no pude estar vacio.'
        }),
    founder: joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'El Campo founder es Obligatorio.',
            'string.empty': 'El Campo founder no pude estar vacio.'
        })
});

module.exports = schema;