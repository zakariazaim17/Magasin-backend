import mongoose from "mongoose";
import User from "./user.js";

import Soldei from "./solde.js";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  Category: {
    type: String,
    enum: [
      "automotive",
      "home&kitchen",
      "electronics",
      "fashion&clothing",
      "sports&hobbies",
      "beauty&self-care",
      "arts&crafts",
      "animals",
    ],
    required: true,
  },
  Description: String,
  Images: String,
  Published: Date,
  OnStore: Boolean,
  Owner: { type: mongoose.Types.ObjectId, ref: User },
  Quantity: { type: Number, min: 0 },
  Sizes: [{ types: String, enum: ["XS", "S", "M", "L", "XL", "2XL", "3XL"] }],
  CodePromo: { type: mongoose.Types.ObjectId, ref: Soldei },
});
const Product = mongoose.model("Products", productSchema);
export default Product;
