import IUser from "../interfaces/user";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  games: { type: [{ type: Schema.Types.ObjectId }] },
});

export default mongoose.model<IUser>("User", UserSchema);
