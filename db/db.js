import mongoose from "mongoose";
// this function returns a promise if connection is established to db or not!

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (err) {
    console.error("Connection to db failed", err);
  }
};

export default connectMongo;
