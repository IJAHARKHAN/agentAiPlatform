import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import proxy from "express-http-proxy";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use("/auth", proxy(process.env.AUTH_SERVICE))

app.get("/", (req, res) => {
    res.json({ message: "Gateway server is running" });
});

app.listen(port, () => {
    console.log(`Gateway server running on port ${port}`)
});