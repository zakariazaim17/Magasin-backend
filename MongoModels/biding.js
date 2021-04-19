import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.Schema;

const BidingSchema = new Schema({
  Title: { type: String, requirede: true },
  Initialprice: { type: Number, required: true },
  participants: Number,
  Owner: [{ type: mongoose.Types.ObjectId, ref: User }],
});

const Bidings = mongoose.model("Bidings", BidingSchema);

export default Bidings;
