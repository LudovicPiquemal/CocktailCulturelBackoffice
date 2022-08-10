'use strict';

/**
 * stop-word service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stop-word.stop-word');
