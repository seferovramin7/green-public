'use strict';

/**
 * company-tree service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-tree.company-tree');
