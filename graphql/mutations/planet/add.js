import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import PlanetType from '../../types/planet';
import PlanetModel from '../../../models/Planet';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(PlanetType)
    }
  },
  async resolve (root, params, options) {
    const PlanetModel = new PlanetModel(params.data);
    const newPlanet = await PlanetModel.save();

    if (!newPlanet) {
      throw new Error('Error adding new comment');
    }
    return true;
  }
};
