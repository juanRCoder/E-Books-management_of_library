import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1:27017/eBooksDB";

async function DBConnect() {
  try {
    await mongoose.connect(URL);
    console.log("Database connect!");
  } catch (error) {
    console.log("DB: Error!" + error);
  }
}
export default DBConnect;
