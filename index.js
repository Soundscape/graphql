const hapi = require('hapi')
const graphqlServer = require('graphql-server-hapi')

const myGraphqlSchema = require('./schema/schema')

const server = new hapi.Server()

const HOST = 'localhost'
const PORT = 3000

server.connection({
    host: HOST,
    port: PORT
})

server.register({
    register: graphqlServer.graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions: { schema: myGraphqlSchema },
        route: { cors: true }
    }
})

server.register({
    register: graphqlServer.graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: { endpointURL: '/graphql' },
        route: { cors: true }
    }
})

server.start((err) => {
    if (err) throw err

    console.log(`Server running at: ${server.info.uri}`)
})