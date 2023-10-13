import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The product title is required "],
      unique: true,
      trim: true,
      maxlength: [50, "title cannot be grater than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "description cannot be grater than 200 characters"],
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Product || model("Product", productSchema);
