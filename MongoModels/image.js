import mongoose from "mongoose";

//photo will be the path to exact image in upload folder to retrieve

const Schema = mongoose.Schema;

const ImageSChema = new Schema({
  photo: { type: String },
});

const Image = mongoose.model("Images", ImageSChema);
export default Image;
