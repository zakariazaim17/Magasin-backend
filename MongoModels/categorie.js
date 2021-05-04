import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Name: String,
  TotalItems: Number,
  Images: String,
});
const Category = mongoose.model("Categories", CategorySchema);
export default Category;
