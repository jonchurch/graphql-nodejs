import {
  GraphQLBoolean
} from 'graphql';

import PlanetModel from '../../../models/Planet';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return PlanetModel
      .remove({})
      .exec();
  }
};
