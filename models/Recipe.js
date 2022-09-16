const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for books
class Recipe extends Model {}

Recipe.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    title: {
      type: DataTypes.STRING,
    },
    strIngredient1: {
      type: DataTypes.STRING,
    },
    strIngredient2: {
      type: DataTypes.STRING,
    },
    strIngredient3: {
      type: DataTypes.STRING,
    },
    strIngredient4: {
      type: DataTypes.STRING,
    },
    strIngredient5: {
      type: DataTypes.STRING,
    },
    strIngredient6: {
      type: DataTypes.STRING,
    },
    strIngredient7: {
      type: DataTypes.STRING,
    },
    strIngredient8: {
      type: DataTypes.STRING,
    },
    strIngredient8: {
      type: DataTypes.STRING,
    },
    strIngredient10: {
      type: DataTypes.STRING,
    },
    strIngredient11: {
      type: DataTypes.STRING,
    },
    strIngredient12: {
      type: DataTypes.STRING,
    },
    strIngredient13: {
      type: DataTypes.STRING,
    },
    strIngredient14: {
      type: DataTypes.STRING,
    },
    strIngredient15: {
      type: DataTypes.STRING,
    },
    strIngredient16: {
      type: DataTypes.STRING,
    },
    strIngredient17: {
      type: DataTypes.STRING,
    },
    strIngredient18: {
      type: DataTypes.STRING,
    },
    strIngredient19: {
      type: DataTypes.STRING,
    },
    strIngredient20: {
      type: DataTypes.STRING,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    cook_time: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
