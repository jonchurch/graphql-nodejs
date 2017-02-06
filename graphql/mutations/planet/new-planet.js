import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import planetType from '../../types/planet';
import PlanetInputType from '../../types/planetInput';
import PlanetModel from '../../../models/Planet';

// const pizza = new PlanetModel()
// console.log('=====HERE GOES NOTHING!',pizza)

export default {
  type: planetType,
  args: {},
  async resolve (root, params, options) {
    const planetModel = new PlanetModel(planet_stub);
    const newPlanet = await planetModel.save();

    if (!newPlanet) {
      throw new Error('Error adding new comment');
    }
    return newPlanet;
  }
};

var planet_stub = {

      name: "Colony",
      metal: 3000,
      crystal: 2000,
      buildings: [
        {
          name: "Metal Mine",
          category: "Resources",
          level: 1,
          upgradeCost: {
            metal: 2000,
            crystal: 500
          },
          upgradeTime: 3000,
          canUpgrade: false,
          lastUpgraded: 2000,
          createdOn: 5000,
          upgrading: false
        },
        {
          name: "Crystal Mine",
          category: "Resources",
          level: 1,
          upgradeCost: {
            metal: 2000,
            crystal: 500
          },
          upgradeTime: 3000,
          canUpgrade: false,
          lastUpgraded: 2000,
          createdOn: 5000,
          upgrading: false
        }
      ]
  }
