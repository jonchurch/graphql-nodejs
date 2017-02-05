import {
  GraphQLList
} from 'graphql';

import PlanetType from '../../types/planet';
import getProjection from '../../get-projection';
import PlanetModel from '../../../models/Planet';

export default {
  type: new GraphQLList(PlanetType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PlanetModel
      .find()
      .select(projection)
      .exec();
  }
};
