const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "Buyer", required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalAmount: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ["pending", "processing", "shipped", "delivered"], default: "pending" },
    paymentStatus: { type: String, enum: ["unpaid", "paid"], default: "unpaid" },
    deliveryAddress: { type: String, required: true, minlength: 1, maxlength: 255 } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);