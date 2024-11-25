const Task = require("../models/TodoSchema");

exports.createTask = async (req, res) => {
    console.log("Incoming request to create task:", req.body);
    try {
        const task = new Task(req.body);
        await task.save();
        console.log("Task saved successfully:", task);
        res.status(201).json(task);
    } catch (error) {
        console.error("Error saving task:", error.message);
        console.error(error.stack); // Log stack trace for better debugging
        res.status(400).json({ error: "Failed to save task. " + error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            return res.status(404).json({ error: 'No tasks found' });
        }
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        console.error(error.stack); // Log stack trace for better debugging
        res.status(500).json({ error: "Failed to fetch tasks. " + error.message });
    }
};

exports.getTaskbyID = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        console.error("Error fetching task by ID:", error.message);
        console.error(error.stack); // Log stack trace for better debugging
        res.status(500).json({ error: "Failed to fetch task. " + error.message });
    }
};

exports.updateTaskbyID = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id, 
            { Completed:req.body.Completed}, 
            { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        console.error("Error updating task by ID:", error.message);
        console.error(error.stack); // Log stack trace for better debugging
        res.status(500).json({ error: "Failed to update task. " + error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error("Error deleting task:", error.message);
        console.error(error.stack); // Log stack trace for better debugging
        res.status(500).json({ error: "Failed to delete task. " + error.message });
    }
};
