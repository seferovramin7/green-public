'use strict';

/**
 * placemark router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::placemark.placemark');
