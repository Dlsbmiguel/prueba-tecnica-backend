const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
});

module.exports = mongoose.model("Customer", CustomerSchema);
