import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 15 },
  email: { type: String, required: true, minlegth: 10, maxlength: 50 },
  password: { type: String, required: true, minlegth: 8, maxlength: 15 },
});

export default mongoose.model("profile", profileSchema);
