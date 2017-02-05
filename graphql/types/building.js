import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import CostType from './cost'

export default new GraphQLObjectType({
  name: 'Building',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),

    },
    name: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString
    },
    upgradeCost: {
      type: CostType,
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
