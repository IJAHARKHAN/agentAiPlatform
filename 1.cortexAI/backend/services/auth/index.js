import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 8001;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Auth server is running" });
});

app.listen(port, async () => {
    console.log(`Auth server running on port ${port}`)
    await connectDB()
});