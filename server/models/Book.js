import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    summary: {
        type: String,
    },

    author: {
        type: String,
        required: true,
    },

    ISBN: {
         type: Number,
         required: true,
         unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true 
});

const Book = model("Book", bookSchema);

export default Book;
