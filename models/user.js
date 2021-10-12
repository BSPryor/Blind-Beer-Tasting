const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  games: { type: [{ type: Schema.Types.ObjectId, ref: 'Game' }] },
});

module.exports = mongoose.model("User", UserSchema);
