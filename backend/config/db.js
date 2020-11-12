import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.blue.bold); //use of color.js npm package
  } catch (error) {
    console.error(`Error: ${error.message}`.yellow.inverse);
    process.exit(2);
  }
};

export default connectDB;
