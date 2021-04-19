import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SoldSchema = new Schema({
  Percentage: { type: Number, required: true },
  Expiry: Date,
  Code: { type: String, required: true },
});

const Solde = mongoose.model("Discounts", SoldSchema);

export default Solde;
