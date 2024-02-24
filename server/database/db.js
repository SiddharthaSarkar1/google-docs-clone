import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database connected Successfully.");
  } catch (error) {
    console.log("Error while connecting MongoDB!!!", error);
  }
};

export default Connection;
