const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SlotsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  sunday: { type: Number, required: true },
  monday: { type: Number, required: true },
  tuesday: { type: Number, required: true },
  wednesday: { type: Number, required: true },
  thrusday: { type: Number, required: true },
  friday: { type: Number, required: true },
  slots: [
    {
      teacher: {
        type: String,
        required: true
      },
      sections: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      numLectures: {
        type: String,
        required: true
      }
    }
  ]
});
module.exports = Slots = mongoose.model("slots", SlotsSchema);
