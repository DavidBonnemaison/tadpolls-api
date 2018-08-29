const { GraphQLObjectType, GraphQLList } = require('graphql');
const { User } = require('../../models/User');
const { userType } = require('../types/user');

export const queryType = new GraphQLObjectType({
  name: 'UserQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      resolve: () => {
        const users = User.find().exec();
        if (!users) {
          throw new Error('Error');
        }
        return users;
      }
    }
  })
});
