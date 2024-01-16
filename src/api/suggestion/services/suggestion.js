'use strict';

/**
 * suggestion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suggestion.suggestion');
