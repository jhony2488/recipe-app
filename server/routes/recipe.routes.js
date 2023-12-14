const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching recipe", error: error.message });
  }
});

router.post("/", isAuthenticated, async (req, res) => {
  try {
    const { title, ingredients, preparationSteps, categories, image } =
      req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      preparationSteps,
      author: req.payload._id,
      categories,
      image,
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

router.delete("/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId;

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
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
