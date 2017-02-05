import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import Building from './building'

export default new GraphQLObjectType({
  name: 'Planet',
  fields: {
  _id: {
    type: new GraphQLNonNull(GraphQLID),
  },
  name: {
    type: GraphQLString,
  },
  metal: {
    type: GraphQLInt,
  },
  crystal: {
    type: GraphQLInt,
},
buildings: {
  type:  GraphQLString//new GraphQLList(Building)
}

}
})
