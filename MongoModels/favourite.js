import mongoose from "mongoose";
import User from "./user.js";
import Products from "./product.js";

const Schema = mongoose.Schema;

const FavouritesSchema = new Schema({
  Owner: { type: mongoose.Types.ObjectId, ref: User },
  Products: { type: mongoose.Types.ObjectId, ref: Products },
});

const Favourites = mongoose.model("Favourites", FavouritesSchema);

export default Favourites;
