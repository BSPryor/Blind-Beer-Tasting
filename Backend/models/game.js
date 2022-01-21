const mongoose = require('mongoose');
const Schema = mongoose.Schema

const GameSchema = new Schema({
  name: { type: String, requried: true},
  beers: { type: [{ type: Schema.Types.ObjectId, ref: 'Beer' }] },
  scores: { type: [{ type: Schema.Types.ObjectId, ref: 'Score' }] },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}) 
module.exports = mongoose.model("Game", GameSchema)