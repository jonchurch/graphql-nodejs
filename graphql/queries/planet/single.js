import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import planetType from '../../types/planet';
import getProjection from '../../get-projection';
import PlanetModel from '../../../models/Planet';

export default {
  type: planetType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PlanetModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
