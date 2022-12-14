const router = require("express").Router();
const { Recipe } = require("../../models");

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/newRecipe", async (req, res) => {
  res.render("new-recipe");
});

router.get("/", async (req, res) => {
  const dailyRecipe = await Recipe.findOne({
    where: {
      id: 7,
    },
    // include: [title, image, instructions],
  });
  console.log(dailyRecipe);
  const recipe = dailyRecipe.get({ plain: true });

  res.render("DailyRecipe", {
    recipe: recipe,
  });
});

router.get("/Recipes", async (req, res) => {
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
        image: recipe.image, //RETURN THAT SHIT!!!
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
