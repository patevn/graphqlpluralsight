//import type helpers from graphQL
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const pgdb = require('../database/pgdb');
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
            //{pgPool} he is a destructed context object
            resolve: (obj, args, { pgPool }) => {
                ///Read user info from DB
                // using args.key as the api key
                //pgPool via the context(ctx) object
                return pgdb(pgPool).getUser(args.key);
            }
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = ncSchema;