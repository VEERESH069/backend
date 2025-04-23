const mongoose = require("mongoose");
const {model} = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true },
    name: { type: String, required: true, minlength: 1, maxlength: 200 },
    description: { type: String, required: true, minlength: 1, maxlength: 1000 },
    category: { type: String, required: true, minlength: 1, maxlength: 100 },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 }, 
    condition: { type: String, enum: ["new", "used", "refurbished"], required: true },
    standards: { type: [String], default: [] },
    documents: { type: [String], default: [] },
    images: { type: [String], default: [] }
  },
  { timestamps: true }
);
const Product = model('Product',productSchema);
module.exports = Product;