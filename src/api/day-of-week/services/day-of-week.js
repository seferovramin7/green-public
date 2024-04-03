'use strict';

/**
 * day-of-week service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::day-of-week.day-of-week');
