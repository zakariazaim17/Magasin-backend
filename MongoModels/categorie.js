import mongoose from "mongoose";
import Image from "./image.js";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Name: String,
  TotalItems: Number,
  Images: String,
});
const Category = mongoose.model("Categories", CategorySchema);
export default Category;
