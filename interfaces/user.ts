import { Schema } from "mongoose";

export default interface IUser extends Document {
  name: string;
  password: string;
  games: [{ type: Schema.Types.ObjectId; ref: "Game" }];
}
