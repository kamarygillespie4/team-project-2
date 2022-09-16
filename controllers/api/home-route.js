const router = require("express").Router();
const { Recipe } = require("../../models");

// TODO: GET api information so we can get it into the dev tools and store to local storage. Might have to be moved.

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
