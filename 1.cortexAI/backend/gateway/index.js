import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Gateway server is running" });
});

app.listen(port, () => {
    console.log(`Gateway server running on port ${port}`)
});