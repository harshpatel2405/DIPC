const express = require("express");
const Todo = require("../models/todoModel");
const router = express.Router();

// POST: Create a new Todo
router.post("/", async (req, res) => {
  const { title, description, dueDate, userId } = req.body;

  try {
    const newTodo = new Todo({ title, description, dueDate, userId });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Retrieve all Todos for a specific user
router.get("/", async (req, res) => {
  const { userId } = req.query; // Get userId from query parameters

  try {
    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH: Update a Todo by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete a Todo by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
