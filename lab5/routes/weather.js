const Router = require('express').Router;
const WeatherController = require('../controllers/WeatherController.js');

const weatherRouter = new Router('/');


weatherRouter.get('/', WeatherController.indexPage);
weatherRouter.get('/weather', WeatherController.weatherPage);

module.exports = weatherRouter;