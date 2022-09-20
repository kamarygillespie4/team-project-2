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
    image: {
      type: DataTypes.STRING,
    },
    strIngredient1: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient2: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient3: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient4: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient5: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient6: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient7: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient8: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient9: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient10: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient11: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient12: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient13: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient14: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient15: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient16: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient17: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient18: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient19: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    strIngredient20: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    instructions: {
      type: DataTypes.STRING(1500),
    },
    cook_time: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING(500),
      allowNull: true,
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
