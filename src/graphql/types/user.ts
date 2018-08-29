const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

export const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString }
  })
});
