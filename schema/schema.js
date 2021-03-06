const tools = require('graphql-tools')

const resolvers = require('./resolvers')

const Post = require('./post')
const Film = require('./film')
const Showtime = require('./showtime')
const CinemaChain = require('./cinemachain')

const Query = `
    type Query {
        # Retrieve all films
        showtimes(limit: Int!, offset: Int!): [Showtime]
        # Retrieve all films
        films(limit: Int!, offset: Int!): [Film]
        # Retrieve all cinema chains
        cinemachains(limit: Int!, offset: Int!): [CinemaChain]

        # Retrieve all posts
        posts: [Post]
        # Retrieve a post by its ID
        post(id: Int!): Post
        # Retrieve all authors
        authors: [Author]
        # Retrieve an author by its ID
        author(id: Int!): Author
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
        ...Post, CinemaChain, Film, Showtime
    ],
    resolvers: resolvers
})
