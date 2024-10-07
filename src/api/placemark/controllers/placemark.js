'use strict';

/**
 * placemark controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::placemark.placemark');
