'use strict';

/**
 * Sections.js controller
 *
 * @description: A set of functions called "actions" for managing `Sections`.
 */

module.exports = {

  /**
   * Retrieve sections records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sections.search(ctx.query);
    } else {
      return strapi.services.sections.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sections record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sections.fetch(ctx.params);
  },

  /**
   * Count sections records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sections.count(ctx.query);
  },

  /**
   * Create a/an sections record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sections.add(ctx.request.body);
  },

  /**
   * Update a/an sections record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sections.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sections record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sections.remove(ctx.params);
  }
};
