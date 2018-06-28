//import type helpers from graphQL
const {
GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

//the root query is where in the data graph we can start asking questions
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world'
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = ncSchema;