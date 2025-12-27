require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const router = require("./routes/tasks");

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("Task Manager API is running.");
});

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());
app.use("/api/v1/tasks", router);

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
