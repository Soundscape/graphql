const _ = require('lodash');

const connectors = require('../sql/schema')

const resolvers = {
  Query: {
    showtimes: (obj, { limit, offest }) => connectors.Showtimes.findAll({ offset: offest, limit: limit }),
    films: (obj, { limit, offest }) => connectors.Films.findAll({ offset: offest, limit: limit }),
    cinemaChains: (obj, { limit, offest }) => connectors.CinemaChains.findAll({ offset: offest, limit: limit }),
    sites: (obj, { limit, offest }) => connectors.Sites.findAll({ offset: offest, limit: limit })
  },
  CinemaChain: {
    sites: (cinemaChain) => connectors.Sites.findAll({ cinemaChainId: cinemaChain.id })
  },
  Site: {
    cinemaChain: (site) => connectors.CinemaChains.findById(post.cinemaChainId),
    showtimes: (site) => connectors.Showtimes.findAll({ cinemaChainId: site.cinemaChainId, siteId: site.id })
  }
};

module.exports = resolvers
