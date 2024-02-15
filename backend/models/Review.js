import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour"
    },
    username: {
      type: String,
      
    },
    reviewText: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      
      
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
