'use strict';

/**
 * stop-word router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stop-word.stop-word');
