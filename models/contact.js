const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  mobile: { type: String, required: true },
  companyName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  reference: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
