const router = require("express").Router();
const { Recipe } = require("../../models");

router.get("/recipes", async (req, res) => {
  try {
    const allRecipe = await Recipe.findAll();
    const recipes = allRecipe.map((recipe) => recipe.get({ plain: true }));

    res.render("all-recipes", {
      recipes: recipes,
    });
  } catch (err) {}
});

module.exports = router;
