'use strict';

const {createCoreController} = require('@strapi/strapi').factories;
const axios = require('axios');

module.exports = createCoreController('api::weather.weather', ({strapi}) => ({
  async findByCoordinates(ctx) {
    try {
      const {latitude, longitude} = ctx.query;

      if (!latitude || !longitude) {
        return ctx.badRequest('Latitude and longitude are required.');
      }

      // Use an external API to get the city name from latitude and longitude (e.g., OpenWeatherMap or Google Geocoding API)
      const geoApiUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=f88c9284b6f2ee3f2e8b40c6f57c5fe0`;

      const response = await axios.get(geoApiUrl);
      const city = response.data[0]?.name;

      if (!city) {
        return ctx.notFound('City not found.');
      }



      // Step 2: Fetch live weather data from the OpenWeatherMap API
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f88c9284b6f2ee3f2e8b40c6f57c5fe0`;
      const weatherResponse = await axios.get(weatherApiUrl);
      const weatherData = weatherResponse.data;

      const liveTemperature = weatherData.main.temp; // Get the temperature
      const liveCondition = weatherData.weather[0].main; // Get the weather condition, e.g., Sunny, Rainy

      // Step 3: Find any weather data stored in your Strapi database for the same city
      const storedWeatherData = await strapi.entityService.findMany('api::weather.weather', {
        fields: ['greeting', 'greetingDescription'], // Specify the fields you want to retrieve
      });


      // Step 4: Construct the response
      const result = {
        city,
        liveWeather: {
          temperature: `${liveTemperature}°C`,
          condition: liveCondition,
        },
        storedWeatherData: storedWeatherData,
      };





      // Send the weather data
      ctx.send(result);
    } catch (err) {
      console.log(err);
      return ctx.internalServerError('An error occurred while fetching weather data.');
    }
  },
}));

