import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("Missing MongoDB connection string. Set MONGO_URI or MONGODB_URI.");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log("✅ MongoDB Connected");
    console.log(`Host: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);

  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
