const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

const ContestsStatusType = require('./constest-status');

module.exports = new GraphQLObjectType({
    name: 'ContestStatusType',

    fields: {
        id: { type: GraphQLID },
        code: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        status: {type: new GraphQLNonNull(ContestsStatusType)},
        createdAt: { type: new GraphQLNonNull(GraphQLString) }
    }
})