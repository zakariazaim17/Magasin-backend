import mongoose from "mongoose";
import User from "./user.js";
const Schema = mongoose.Schema;

const ComplainSchema = new Schema({
  From: { type: mongoose.Types.ObjectId, ref: User, required: true },
  To: { type: mongoose.Types.ObjectId, ref: User, required: true },
  Content: { type: String, required: true },
  Status: { type: String, enum: ["approved", "declined", "pending"] },
});

const Complainment = mongoose.model("Complains", ComplainSchema);

export default Complainment;
