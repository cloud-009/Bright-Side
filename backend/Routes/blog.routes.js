const express = require('express');
const blogRoute = express.Router();

const blogModel = require('../Model/post');

// Get all data
blogRoute.route('/').get((req, res, next) => {
    blogModel.find((err, data) => {
        if (err) return next(err);
        else res.json(data);
    })
});

// Post the data
blogRoute.route('/add-blog').post((req, res, next) => {
    blogModel.create(req.body, (err, data) => {
        if (err) return next(err);
        else res.json(data);
    });
});

module.exports = blogRoute;