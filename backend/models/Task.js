const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name of the task must be provided"],
            maxLength: [50, "Task name cannot exceed 50 characters"],
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
