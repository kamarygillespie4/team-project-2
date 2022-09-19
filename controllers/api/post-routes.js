const router = require('express').Router();
const { Recipe } = require('../../models/');
const withAuth = require('../../utils/auth');
// const { post } = require('./userRoutes');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newRecipe = await Recipe.create({ ...body, userId: req.session.userId });
        res.json(newRecipe);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;