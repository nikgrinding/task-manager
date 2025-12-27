const getTasks = (req, res) => {
    return res.status(200).send("get all tasks");
};

const createTask = (req, res) => {
    return res.status(201).send("create task");
};

const getTask = (req, res) => {
    return res.status(200).send("get task");
};

const updateTask = (req, res) => {
    return res.status(200).send("update task");
};

const deleteTask = (req, res) => {
    return res.status(200).send("delete task");
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
