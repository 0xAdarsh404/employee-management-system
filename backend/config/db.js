import mongoose from "mongoose";

let connectionPromise = null;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("Missing MongoDB connection string. Set MONGO_URI or MONGODB_URI.");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    if (!connectionPromise) {
      connectionPromise = mongoose.connect(mongoUri).catch((error) => {
        connectionPromise = null;
        throw error;
      });
    }

    const conn = await connectionPromise;

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
