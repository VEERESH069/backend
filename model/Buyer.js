const { Schema, model } = require("mongoose");

const buyerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User ", required: true },
    fullName: { type: String, required: true, minlength: 1, maxlength: 100 },
    address: { type: String, required: true, minlength: 1, maxlength: 255 },
    phone: { type: String, required: true, minlength: 10, maxlength: 15 },
    preferences: { type: [String], default: [] },
    budget: { type: Number, min: 0 },
    company: { type: String, maxlength: 100 },
    industryType: { type: String, maxlength: 100 }
  },
  { timestamps: true }
);

const Buyer= model("Buyer", buyerSchema);
module.exports = Buyer;