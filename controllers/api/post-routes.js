const router = require('express').Router();
const { Recipe } = require('../../models/');
const withAuth = require('../../utils/auth');
// const { post } = require('./userRoutes');

router.post('/', withAuth, async ({body, session}, res) => {
    console.log(body);
    try {
        const ingredientsArr = body.ingredients.split(',');
        const cleanData = {
            instructions: body.instructions,
            title: body.title,
            cook_time: body.cook
        
        }
        for (let i = 0; i < ingredientsArr.length; i++) {
            const element = ingredientsArr[i];
            const key = `strIngredient${i+1}`;
            cleanData[key] = element;
        }

        // await Recipe.create(cleanData);
       await Recipe.create({ ...cleanData, userId: session.userId });
        res.redirect('/recipes');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;