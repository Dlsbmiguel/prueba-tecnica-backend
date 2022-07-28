const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema({
  fullAddress: {
    required: true,
    type: String,
  },
  customerId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

module.exports = mongoose.model("Address", AddressSchema);
