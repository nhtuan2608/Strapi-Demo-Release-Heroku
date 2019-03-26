'use strict';

/**
 * Sectiondetail.js controller
 *
 * @description: A set of functions called "actions" for managing `Sectiondetail`.
 */

module.exports = {

  /**
   * Retrieve sectiondetail records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sectiondetail.search(ctx.query);
    } else {
      return strapi.services.sectiondetail.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sectiondetail record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sectiondetail.fetch(ctx.params);
  },

  /**
   * Count sectiondetail records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sectiondetail.count(ctx.query);
  },

  /**
   * Create a/an sectiondetail record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sectiondetail.add(ctx.request.body);
  },

  /**
   * Update a/an sectiondetail record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sectiondetail.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sectiondetail record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sectiondetail.remove(ctx.params);
  }
};
