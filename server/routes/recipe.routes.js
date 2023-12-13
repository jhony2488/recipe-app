const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// Middleware to authenticate user (assuming you have one)
// const authMiddleware = require('../middleware/authMiddleware');

// Function to create a new recipe
router.post("/", isAuthenticated, async (req, res) => {
  try {
    const { title, ingredients, preparationSteps, categories, images } =
      req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      preparationSteps,
      author: req.payload._id,
      categories,
      images,
    });

    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: newRecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating recipe", error: error.message });
  }
});

// Function to get a specific recipe
router.get("/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ recipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching recipe", error: error.message });
  }
});

// Function to update a recipe
router.put("/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const updateData = req.body;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updateData, {
      new: true,
    });
    res.json({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating recipe", error: error.message });
  }
});

// Function to delete a recipe
router.delete("/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const userId = req.payload._id;

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.author.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this recipe" });
    }

    await Recipe.findByIdAndDelete(recipeId);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting recipe", error: error.message });
  }
});

module.exports = router;
