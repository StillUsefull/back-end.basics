const axios = require('axios');
const UniversalErrorHandler = require('../exceptions/UniversalErrorHandler');
const dbService = require('./dbService.js');
class WeatherService {

    async getWeatherByTown(townName){
            let weatherData;
            await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${process.env.API_KEY}`)
                .then((response) => {
                    weatherData = response.data;
            })
                .catch((e) => {
                    throw UniversalErrorHandler.BadRequest(e.message);
            })

            
            const sendData = {
                name: townName,
                data: {...weatherData.main}
            }
            dbService.writeDataInJson(sendData);
            return sendData;
                
    }
    

    getAll() {
        const weatherData = dbService.readData();
        return weatherData;
    }
}

module.exports = new WeatherService();