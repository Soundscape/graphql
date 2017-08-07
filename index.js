const hapi = require('hapi')
const graphqlServer = require('graphql-server-hapi')

const myGraphqlSchema = require('./schema/schema')

const server = new hapi.Server()

const HOST = '0.0.0.0'
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

function checkEnvironment(l1, p1) {
	console.log(l1 + ': ' + p1)
    if ( typeof p1 == 'undefined' || !p1 ) throw "Error Undefined " + l1
}

server.start((err) => {
    if (err) throw err
	
	checkEnvironment('host', process.env.DB_HOST)
	checkEnvironment('user', process.env.DB_USER)
	checkEnvironment('password', process.env.DB_PASS)
	checkEnvironment('schema', process.env.DB_SCHEMA)
	checkEnvironment('dialect', process.env.DB_DIALECT)

    console.log(`Server running at: ${server.info.uri}`)
})
