'use strict';

/**
 * weather controller
 */

const {createCoreController} = require('@strapi/strapi').factories;
const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json";

module.exports = createCoreController('api::weather.weather', ({strapi}) => ({
  async find(ctx) {

    const {geoLoc} = ctx.query;
    const locale = 'en'//ctx.query;

    const weatherData = await fetchWeatherData(geoLoc, locale);
    const weather = await strapi.db.query('api::weather.weather').findOne();
    return {weather : weather, weatherData : weatherData};
  }
}));

async function fetchWeatherData(coordinates, lang) {
  const response = await fetch(`${apiUrl}?q=${coordinates}&lang=${lang}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "030af0dfcemshfe4800f7d517961p11ce4ajsneb2726d0f3a3"
    }
  });

  const data = await response.json();
  console.log("Received data:", data);
  return data;
}
