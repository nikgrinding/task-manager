const Task = require("../models/Task");
const asyncWrapper = require("../utils/asyncWrapper");

const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    return res.status(201).send({ task });
});

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        const err = new Error("Task does not exist");
        err.statusCode = 404;
        throw err;
    }
    return res.status(200).send({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
    if (!task) {
        const err = new Error("Task does not exist");
        err.statusCode = 404;
        throw err;
    }
    return res.status(200).send({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
        const err = new Error("Task does not exist");
        err.statusCode = 404;
        throw err;
    }
    return res.status(200).send({ task });
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
