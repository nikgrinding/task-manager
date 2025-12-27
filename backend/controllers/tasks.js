const Task = require("../models/Task");

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ tasks });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).send({ task });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) {
            return res.status(404).send({ message: "Task does not exist" });
        }
        return res.status(200).send({ task });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send({ message: "Task does not exist" });
        }
        return res.status(200).send({ task });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) {
            return res.status(404).send({ message: "Task does not exist" });
        }
        return res.status(200).send({ task });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
