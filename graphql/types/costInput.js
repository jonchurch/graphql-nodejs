
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CostInput',
  fields: {
    metal: {
      type: GraphQLInt
    },
    crystal: {
      type: GraphQLInt
    }
  }
});
