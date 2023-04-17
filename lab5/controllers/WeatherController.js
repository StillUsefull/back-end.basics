const WeatherService = require('../services/WeatherService.js');



class WeatherController {

    async indexPage(req, res, next){
        try {
            const weatherData = await WeatherService.getAll();
            res.json(weatherData);
        } catch (e) {
            next(e);
        }
    }

    async weatherPage(req, res, next) {
        try {
            const town = req.query.town;
            const weatherData = await WeatherService.getWeatherByTown(town);
            res.send(weatherData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new WeatherController();