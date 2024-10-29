'use strict';

/**
 * customer-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-profile.customer-profile');
