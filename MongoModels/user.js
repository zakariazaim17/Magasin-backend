import mongoose from "mongoose";
const Schema = mongoose.Schema;

//User model
const UserSchema = new Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Pass: { type: String, required: true },
  ClientLevel: Number,
  Verified: Boolean,
  Joined: Date,
  Totalproducts: { type: Number, min: 0 },
});
export default mongoose.model("Users", UserSchema);
