const mongoose = require("mongoose");

// Schema for the Category model
const categorySchema = new mongoose.Schema({
  // Name of the category or tag, required field
  name: {
    type: String,
    required: true,
    unique: true, // Ensures that each category name is unique
    trim: true, // Trims whitespace from the name
  },
  // Optional description for the category
  description: {
    type: String,
    trim: true, // Trims whitespace from the description
  },
});

// Create the Category model from the schema
const Category = mongoose.model("Category", categorySchema);

// Export the Category model for use in other parts of the application
module.exports = Category;
