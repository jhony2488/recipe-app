const mongoose = require("mongoose");

// Schema for the Recipe model
const recipeSchema = new mongoose.Schema(
  {
    // Title of the recipe, required field
    title: {
      type: String,
      required: true,
      trim: true, // Trims whitespace from the title
    },
    // Ingredients for the recipe, stored as an array of strings
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    // Preparation steps, stored as an array of strings
    preparationSteps: [
      {
        type: String,
        required: true,
      },
    ],
    // Author of the recipe, referencing the User model
    author: {
      type: mongoose.Schema.Types.ObjectId, // Reference to a User document
      ref: "User", // Specifies that it refers to the User model
      required: true,
    },
    // Categories or Tags, stored as an array of strings
    categories: [
      {
        type: String,
        trim: true,
      },
    ],
    // Optional field for date of creation if you want to override automatic timestamps
    dateOfCreation: {
      type: Date,
      default: Date.now, // Defaults to the current date and time
    },
    // Optional images or links, stored as an array of strings
    images: [
      {
        type: String, // Could be URLs to images
        trim: true,
      },
    ],
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields automatically

// Create the Recipe model from the schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export the Recipe model for use in other parts of the application
module.exports = Recipe;
