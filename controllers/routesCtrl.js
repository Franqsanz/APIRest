'use strict';

/* eslint-disable prettier/prettier */
const citiesModel = require('../model/cities');

const getCities = async (req, res) => {
    // citiesModel.find((err, cities) => {
    //     res.send({ cities: cities });
    // });

    try {
        const provinces = await citiesModel.find();
        return res.status(200).send(provinces);
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const getFindOneCities = async (req, res) => {
    // let cityId = req.params.cityId;
    // citiesModel.findById(cityId, (err, cities) => {
    //     res.send({ cities: cities });
    // });

    try {
        let _id = req.params.cityId;
        const province = await citiesModel.findById({ _id });
        if (!province) {
            return res.status(404).send('Is province does not exist');
        } else {
            return res.status(200).send(province);
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const putCities = async (req, res) => {
    // let cityId = req.params.cityId;
    // let updated = req.body;

    // citiesModel.findByIdAndUpdate(cityId, updated, (err, cityUpdate) => {
    //     res.status(200).send({
    //         mensaje: 'Esta ciudad se a actualizado',
    //         citiesModel: cityUpdate
    //     });
    // });

    try {
        let _id = req.params.cityId;
        const {
            city,
            rank,
            latitude,
            longitude,
            populations,
            province
        } = req.body;

        let provinceUpdate = await citiesModel.findOne({ _id });

        if (!provinceUpdate) {
            provinceUpdate = await citiesModel.create({
                city,
                rank,
                latitude,
                longitude,
                populations,
                province
            });
            return res.status(201).send(provinceUpdate);
        } else {
            provinceUpdate.city = city
            provinceUpdate.rank = rank
            provinceUpdate.latitude = latitude
            provinceUpdate.longitude = longitude
            provinceUpdate.populations = populations
            provinceUpdate.province = province

            await provinceUpdate.save();
            return res.status(200).send(provinceUpdate);
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const postCities = async (req, res) => {
    // let newCity = new citiesModel({
    //     _id: req.body.id,
    //     city: req.body.city,
    //     rank: req.body.rank,
    //     latitude: req.body.latitude,
    //     longitude: req.body.longitude,
    //     populations: req.body.populations,
    //     province: req.body.province
    // });

    // newCity.save((err, data) => console.log(data));
    // res.redirect('/api/v1/cities')

    try {
        const _id = req.body.id;
        const {
            city,
            rank,
            latitude,
            longitude,
            populations,
            province
        } = req.body;

        const provinces = await citiesModel.create({
            _id,
            city,
            rank,
            latitude,
            longitude,
            populations,
            province
        });
        return res.status(200).send(provinces);
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

const deleteCities = async (req, res) => {
    // let cityId = req.params.cityId;

    // citiesModel.findById(cityId, (err, cityDelete) => {
    //     cityDelete.remove(() => {
    //         res.send({
    //             mensaje: 'Esta ciudad a sido borrada',
    //             citiesModel: cityDelete
    //         });
    //     });
    // });

    try {
        let _id = req.params.cityId;
        const province = await citiesModel.deleteOne({ _id });
        if (province.deletedCount === 0) {
            return res.status(404).send();
        } else {
            return res.status(200).send('Elimination province');
        }
    } catch (error) {
        return res.status(500).send({ 'error': error });
    }
}

module.exports = {
    getCities,
    getFindOneCities,
    putCities,
    postCities,
    deleteCities
};
