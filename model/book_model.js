import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String, 
    price: Number,
    category: String,
    image: String,
    author:String,
});
const Book = mongoose.model("Book",bookSchema);

export default Book;