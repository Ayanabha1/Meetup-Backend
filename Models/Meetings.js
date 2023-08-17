const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  meeting_id: { type: String, require: true },
  admin_id : {type : String , require : true},
  is_active: { type: Boolean, require: true },
  participants: [String],
  active_participants: [String],
  session_token: { type: String, require: true },
  date: { type: Date, require: true },
});

module.exports = mongoose.model("Meetings", UserSchema);
