import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    idSession: {
        type: String,
        required: [true, "The idSession is required "],        
        unique: true,
    },
    productsSelected: {
        type: Array,
        required: true,
    },
    status: {
      type: String,
      required: [true, "The title is required "],
    },
    price: {
      type: Number,
      required: true,
    },
    tableNum: {
        type: Number,
        required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Order || model("Order", orderSchema);
