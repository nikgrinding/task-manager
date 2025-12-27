const Task = require("../models/Task");

const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ tasks });
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).send({ task });
    } catch (error) {
        next(error);
    }
};

const getTask = async (req, res, next) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) {
            const err = new Error("Task does not exist");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).send({ task });
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        if (!task) {
            const err = new Error("Task does not exist");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).send({ task });
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) {
            const err = new Error("Task does not exist");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).send({ task });
    } catch (error) {
        next(error);
    }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
