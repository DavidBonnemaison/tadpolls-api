const { GraphQLObjectType, GraphQLList } = require("graphql");
const UserModel = require("../../models/User");
const { userType } = require("../types/user");


export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      resolve: () => {
        const users = UserModel.find().exec();
         if (!users) {
           throw new Error("Error");
         }
         return users;
      }
    }
  })
});

