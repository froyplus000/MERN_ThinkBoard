import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("Error connecting ot MongoDB", error);
    process.exit(1); // When error occured, exit with failure
  }
};
