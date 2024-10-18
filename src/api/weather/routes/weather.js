'use strict';

/**
 * weather router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/weather/findByCoordinates',
      handler: 'weather.findByCoordinates',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
