import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
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
  type: new GraphQLList(Building)
}
  // metalMine: {
  //       name: {
  //       type: GraphQLString,
  //
  //     },
  //     upgradeCost: {
  //       metal: {
  //         type: GraphQLInt,
  //       },
  //       crystal: {
  //         type: GraphQLInt,
  //       }
  //     },
  //     upgradeTime: {
  //       type: GraphQLInt,
  //
  //     },
  //     canUpgrade: {
  //       type: GraphQLBoolean,
  //
  //     },
  //     meta: {
  //       lastUpgraded: {
  //         type: GraphQLInt,
  //
  //       },
  //       createdOn: {
  //         type: GraphQLInt,
  //
  //       },
  //   },
  //   upgrading: {
  //     type: GraphQLBoolean,
  //   }
  // }
}
})
