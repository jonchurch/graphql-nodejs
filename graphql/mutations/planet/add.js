import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import PlanetInputType from '../../types/planetInput';
import PlanetModel from '../../../models/Planet';

// const pizza = new PlanetModel()
// console.log('=====HERE GOES NOTHING!',pizza)

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(PlanetInputType)
    }
  },
  async resolve (root, params, options) {
    const planetModel = new PlanetModel(params.data);
    const newPlanet = await planetModel.save();

    if (!newPlanet) {
      throw new Error('Error adding new comment');
    }
    return true;
  }
};
