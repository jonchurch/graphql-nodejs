
var mongoose = require('mongoose')
import Building from './Building'
var buildings = new Building()

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

  resources: {
    metal: {
      type: Number,
      required: true
  },
    crystal: {
      type: Number,
      required: true
  },
},
  // buildings: {
  //   type: [buildings]
  // }



})

module.exports = mongoose.model('Planet', planetSchema)
