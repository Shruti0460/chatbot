
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    enum:["user"]
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", userSchema);
