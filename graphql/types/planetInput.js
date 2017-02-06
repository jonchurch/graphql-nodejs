import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import BuildingInput from './buildingInput'

export default new GraphQLInputObjectType({
  name: 'PlanetInput',
  fields: {
  _id: {
    type: GraphQLID,
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
  type: new GraphQLList(BuildingInput)
}
}
})
