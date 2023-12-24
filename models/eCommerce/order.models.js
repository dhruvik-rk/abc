import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItem: [orderItemSchema],
    //or you can write this (no need to make schema)
    /*
    orderItem: [
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
      },
      quantity: {
        type: Number,
        required: true
      }
    ]
    */
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      // status type is string but value of status is pending/cancel/delever.
      enum: ['Pending', 'Canceled', 'Delevered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
