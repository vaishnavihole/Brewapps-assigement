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

//  POST /book
app.post("/book", async (req, res) => {
    const {
        title,
        summary,
        author,
        ISBN,
        price,
        image
    } = req.body

    const book = new Book({
        title,
        summary,
        author,
        ISBN,
        price,
        image
    })

    try {

        const savedBook = await book.save();

        res.json({
            success: true,
            data: savedBook,
            message: "Book saved successfully"
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
});

// GET/By id
app.get("/book/:id", async (req, res) => {
    const { id } = req.params;

    const book = await Book.findById(id);

    res.json({
        success: true,
        data: book,
        message: "Book featched Successfully"
    })
})

// PUT / Book
app.put("/book/:id", async (req, res) => {
    const { id } = req.params;
    const { title,
        summary,
        author,
        ISBN,
        price,
        image } = req.body

    await Book.updateOne(
        { _id: id },
        {
            $set: {
                title,
                summary,
                author,
                ISBN,
                price,
                image
            },
        }
    ); 
    const updatedBook = await Book.findById(id);

    res.json({
        success: true,
        data: updatedBook,
        message: "Book updated Successfully",
    });
});

// DELETE / Book
app.delete("/book/:id", async (req, res) => {
    const {id } = req.params;

    await Book.deleteOne({_id: id});

    res.json({
      success: true,
      message: "Book deleted successfully"
    })
})

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});

