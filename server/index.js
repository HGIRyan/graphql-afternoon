const { GraphQLServer } = require('graphql-yoga');
const { readFileSync } = require('fs');

const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, 'utf8');
const resolvers = require('./schema/resolvers');

// ===============================================================================//
const server = new GraphQLServer({ 
    typeDefs: typeDefs,
    resolvers: resolvers,
})
const options = {
    port: 3005,
    endpoint: '/graphql',
    playground: '/graphql'
}
// ===============================================================================//

server.start(options, () => console.log(`Server Is Running On ${options.port}`))
// ===============================================================================//

