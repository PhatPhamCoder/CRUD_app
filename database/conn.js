import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://admin:8FxBNJ7wCtacJmij@nextjscrud.tpw9lhl.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState === 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
