const Task = require("../models/Task");
const asyncWrapper = require("../utils/asyncWrapper");
const throwIfResourceNotFound = require("../utils/throwIfResourceNotFound");

const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    throwIfResourceNotFound(task, "Task does not exist");
    return res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
    throwIfResourceNotFound(task, "Task does not exist");
    return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    throwIfResourceNotFound(task, "Task does not exist");
    return res.status(200).json({ task });
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
