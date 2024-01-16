'use strict';

/**
 * tree service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tree.tree');
