import mongoose from "mongoose";
import Image from "./image.js";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Name: String,
  TotalItems: Number,
  Images: { type: mongoose.Types.ObjectId, ref: Image },
});
const Category = mongoose.model("Categories", CategorySchema);
export default Category;
