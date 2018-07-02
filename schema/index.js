//import type helpers from graphQL
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const MeType = require('./types/me');

//the root query is where in the data graph we can start asking questions
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',

    fields: {
        me: {
            type: MeType,
            description: 'The Current user identified by an api key',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                ///Read user info from DB
                // using args.key as the api key
                //pgPool via the context(ctx) object
            }
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = ncSchema;