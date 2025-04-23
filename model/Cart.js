const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: [1, 'Quantity must be at least 1']
  }
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer',
    required: true,
    unique: true
  },
  items: [cartItemSchema],
  totalPrice: {
    type: Number,
    default: 0 
  },
  status: {
    type: String,
    enum: ['active', 'checked_out', 'abandoned'],
    default: 'active'
  }
}, { timestamps: true });

cartSchema.methods.calculateTotalPrice = function() {
  this.totalPrice = this.items.reduce((total, item) => {
    return total + (item.quantity * item.product.price);
  }, 0);
  return this.totalPrice;
};

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;