import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import CostInput from './costInput'

export default new GraphQLInputObjectType({
  name: 'BuildingInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString
    },
    upgradeCost: {
      type: GraphQLString//CostInput,
    },
    upgradeTime: {
      type: GraphQLInt,
    },
    canUpgrade: {
      type: GraphQLBoolean,
    },
    lastUpgraded: {
      type: GraphQLInt,
    },
    createdOn: {
      type: GraphQLInt,
    },
  upgrading: {
    type: GraphQLBoolean,
  }
}
})
