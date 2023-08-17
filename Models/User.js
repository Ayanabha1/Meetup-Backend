const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  meetings: [
    {
      meeting_id: { type: String, require: true },
      session_token: { type: String, require: true },
      start_time: { type: Date, require: true },
      end_time: { type: Date, require: true },
      participants: { type: Number, require: true },
    },
  ],
});

module.exports = mongoose.model("users", UserSchema);
