const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BeerSchema = new Schema({
  name: { type: String, requried: true },
  style: { type: String, requried: true },
  brewery: { type: String, requried: true },
  game: { type: Schema.Types.ObjectId, ref: 'Game'}
}) 
module.exports = mongoose.model("Beer", BeerSchema)