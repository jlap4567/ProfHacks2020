const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//{ type: {type: String}, coordinates: [Number]}
const DonorSchema = new Schema(
  {
    name_of_restaurant: { type: String, required: true },
    location: { type: String, required: true},
    food_available_time: { type: String, required: true },
    recurring: { type: Boolean, required: false },
    recurring_time: { type: String, required: false },
    food_available: { type: String, required: true },
    potential_allergies: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

const Donor = mongoose.model("Donor", DonorSchema);

module.exports = Donor;
