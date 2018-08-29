const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { queryType } = require('./queries/user');

export const userSchema = new GraphQLSchema({
  query: queryType
});
