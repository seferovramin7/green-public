'use strict';

/**
 * placemark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::placemark.placemark');
