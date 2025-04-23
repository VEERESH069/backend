const mongoose = require("mongoose");
const {model} = require("mongoose")
const sellerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User ", required: true },
    fullName: { type: String, required: true, minlength: 1, maxlength: 100 },
    company: { type: String, required: true, minlength: 1, maxlength: 100 },
    address: { type: String, required: true, minlength: 1, maxlength: 255 },
    phone: { type: String, required: true, minlength: 10, maxlength: 15 },
    bankAccount: {
      accountNumber: { type: String, required: true },
      ifscCode: { type: String, required: true },
      bankName: { type: String, required: true },
      accountHolderName: { type: String, required: true }
    },
    certifications: { type: [String], default: [] }
  },
  { timestamps: true }
);
const Seller = model("Seller", sellerSchema);
module.exports = Seller;