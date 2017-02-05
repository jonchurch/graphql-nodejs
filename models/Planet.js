
var mongoose = require('mongoose')
import Building from './Building'
var buildings = Building

var costSchema = new mongoose.Schema({
  metal: {
    type: Number
  },
  crystal: {
    type: Number
  }
})

var buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  upgradeCost: {
    type: costSchema
  },
  upgradeTime: {
    type: Number,
    required: true
  },
  canUpgrade: {
    type: Boolean,
    required: true
  },
  lastUpgraded: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    required: true
  },
upgrading: {
  type: Boolean,
}
})

var planetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  metal: {
    type: Number,
    required: true
},
  crystal: {
    type: Number,
    required: true
},
  buildings: {
    type: [buildingSchema]
  }



})

module.exports = mongoose.model('Planet', planetSchema)
