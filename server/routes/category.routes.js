const express = require("express");
const router = express.Router();
const Category = require("../models/Category.model");

// Function to add a new category

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding category", error: error.message });
  }
});

router.post("/categories", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });

    await newCategory.save();
    res
      .status(201)
      .json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding category", error: error.message });
  }
});

// Function to update a category
router.put("/categories/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updateData = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updateData,
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating category", error: error.message });
  }
});

module.exports = router;
