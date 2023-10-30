import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Book from "./models/Book.js";

const app = express()
app.use(express.json());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log("Connected to MongoDB📦");
    }
}
connectMongoDB();

const PORT = process.env.PORT || 5000;

// health api
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "All Good🏆",
    });
});

// GET /books
app.get("/books", async (req, res) => {
    const books = await Book.find()

    res.json({
        success: true,
        data: books,
        message: "Books fetched successfully"
    })
})


app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});

