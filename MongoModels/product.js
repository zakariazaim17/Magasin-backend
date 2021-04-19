import mongoose from "mongoose";
import ownuser from "./user.js";
const Schema = mongoose.Schema;

import Image from "./image.js";
import Solde from "./solde.js";

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
  Images: [{ type: mongoose.Types.ObjectId, ref: Image }],

  Published: Date,
  OnStore: Boolean,
  Quantity: { type: Number, min: 0 },
  Sizes: [{ types: String, enum: ["XS", "S", "M", "L", "XL", "2XL", "3XL"] }],
  CodePromo: [{ type: mongoose.Types.ObjectId, ref: Solde }],
  Owner: [{ type: mongoose.Types.ObjectId, ref: ownuser }],
});
const Product = mongoose.model("Products", productSchema);
export default Product;
