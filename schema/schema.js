const tools = require('graphql-tools')

const resolvers = require('./resolvers')

const Film = require('./film')
const Showtime = require('./showtime')
const CinemaChain = require('./cinemachain')
const Site = require('./site')

const Query = `
    type Query {
        # Retrieve all films
        showtimes(limit: Int!, offset: Int!): [Showtime]
        # Retrieve all films
        films(limit: Int!, offset: Int!): [Film]
        # Retrieve all cinema chains
        cinemaChains(limit: Int!, offset: Int!): [CinemaChain]
        # Retrieve all sites
        sites(limit: Int!, offset: Int!): [Site]
    }
`

const SchemaDefinition = `
    schema {
        query: Query
    }
`

module.exports = tools.makeExecutableSchema({
    typeDefs: [
        SchemaDefinition, Query,
        CinemaChain, Film, Showtime, Site
    ],
    resolvers: resolvers
})
