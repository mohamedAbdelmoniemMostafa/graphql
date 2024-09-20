const {ApolloServer} = require('@apollo/server');

const {startStandaloneServer} = require('@apollo/server/standalone');

const {typeDefs} = require('#schema/index.js');
const {resolvers} = require('#resolver/index.js');

const server = new ApolloServer({typeDefs,resolvers})

startStandaloneServer(server).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`)
})
