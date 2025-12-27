require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("Task Manager API is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});
