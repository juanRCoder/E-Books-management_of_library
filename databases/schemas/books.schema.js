import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    shelf: {
      type: String,
      default: "Z",
    },
    level: {
      type: String,
      default: "Z1",
    },
    description: String,
    genres: [String],
    cover: {
      type: String,
      default: "https://pbs.twimg.com/media/ENSyT61W4AAGz5Q.jpg",
    },
    status: {
      type: String,
      default: "disponible",
    },
  },
  { versionKey: false }
);

const Books = mongoose.model("Books", bookSchema, "books");
export default Books;
