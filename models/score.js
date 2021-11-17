const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
  game: { type: Schema.Types.ObjectId, ref: 'Game' },
  user:  {type: Schema.Types.ObjectId, ref: 'User' },
  score: { type: [{ type: Number }] }
}) 

module.exports = mongoose.model("Score", ScoreSchema)