'use strict';

/**
 * process-element router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::process-element.process-element');
