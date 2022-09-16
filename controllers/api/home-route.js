const router = require("express").Router();
const { Recipe } = require("../../models");

router.get("/recipes", async (req, res) => {
  try {
    const allRecipe = await Recipe.findAll();
    const recipes = allRecipe.map((recipe) => {
      const temp = recipe.get({ plain: true });
      const ingredientKeys = Object.keys(temp).filter((k) =>
        k.includes("strIngredient")
      );
      let ingredients = [];
      ingredientKeys.forEach((key) => {
        const val = recipe[key];
        if (val) {
          ingredients.push(val);
        }
      });

      return {
        title: recipe.title,
        cook_time: recipe.cook_time,
        instructions: recipe.instructions,
        ingredients,
      };
    });
    console.log("===================");
    console.log(recipes[0]);
    console.log("===================");
    res.render("all-recipes", {
      recipes: recipes,
    });
  } catch (err) {}
});

module.exports = router;
