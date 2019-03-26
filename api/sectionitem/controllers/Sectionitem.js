'use strict';

/**
 * Sectionitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Sectionitem`.
 */

module.exports = {

  /**
   * Retrieve sectionitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sectionitem.search(ctx.query);
    } else {
      return strapi.services.sectionitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sectionitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sectionitem.fetch(ctx.params);
  },

  /**
   * Count sectionitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sectionitem.count(ctx.query);
  },

  /**
   * Create a/an sectionitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sectionitem.add(ctx.request.body);
  },

  /**
   * Update a/an sectionitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sectionitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sectionitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sectionitem.remove(ctx.params);
  }
};
