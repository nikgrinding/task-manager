require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("Task Manager API is running.");
});

const startApplication = async () => {
    const connectionString = process.env.MONGO_URI;
    try {
        await connectDB(connectionString);
        console.log("Successfully connected to DB.");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Backend is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Failed to connect to DB.");
    }
};

startApplication();
