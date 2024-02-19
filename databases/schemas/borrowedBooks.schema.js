import mongoose from "mongoose";

const borrowedBooks = new mongoose.Schema(
  {
    fullName: String,
    fullLastName: String,
    dni: Number,
    phoneNumber: Number,
    tmStart: Date,
    tmEnd: Date,
    address: String,
    district: String,
    title: String,
    cover: String,
  },
  { versionKey: false }
);

const BorrowedBooks = mongoose.model(
  "BorrowedBooks",
  borrowedBooks,
  "borrowedBooks"
);
export default BorrowedBooks;
