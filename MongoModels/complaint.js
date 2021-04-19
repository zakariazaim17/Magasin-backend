import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComplainSchema = new Schema({
  From: { type: String, required: true },
  To: { type: String, required: true },
  Content: { type: String, required: true },
  Status: { type: String, enum: ["approved", "declined", "pending"] },
});

const Complainment = mongoose.model("Complains", ComplainSchema);

export default Complainment;
