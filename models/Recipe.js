const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Recipe extends Model {}

Recipe.init(
    // Define fields/columns on model
    // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
    {
        title: {
            type: DataTypes.STRING
        },
        ingedients: {
            type: DataTypes.STRING
        },
        instructions: {
            type: DataTypes.STRING
        },
        cooktime: {
            type: DataTypes.INTEGER
        }
    }, {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;