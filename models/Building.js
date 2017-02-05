
var mongoose = require('mongoose')

var buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
  upgradeCost: {
    metal: {
      type: Number,
    },
    crystal: {
      type: Number,
    }
  },
  upgradeTime: {
    type: Number,
    required: true
  },
  canUpgrade: {
    type: Boolean,
    required: true
  },
  meta: {
    lastUpgraded: {
      type: Date,
      required: true
    },
    createdOn: {
      type: Date,
      required: true
    },
},
upgrading: {
  type: Boolean,
}
})

module.exports = mongoose.model('Building', buildingSchema)
