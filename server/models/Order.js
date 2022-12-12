const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Order Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
