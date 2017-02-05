
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Cost',
  fields: {
    metal: {
      type: GraphQLInt
    },
    crystal: {
      type: GraphQLInt
    }
  }
});
