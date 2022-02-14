const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/recipes', async (req, res) => {
    const recipes = Schemas.Recipes;

    const recipeNames = await recipes.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        } else {
            res.end();
        }
    });
});

router.get('/ingredients', async (req, res) => {
    const ingredients = Schemas.Ingredients;

    const ingredientName = await ingredients.find({}, (err, ingredientData) => {
        if (err) throw err;
        if (ingredientData) {
            res.end(JSON.stringify(ingredientData));
        } else {
            res.end();
        }
    });
});

router.post('/addIngredient', async (req, res) => {
    const ingredientName = req.body.ingredientName;

    const newIngredient = new Schemas.Ingredients({
        ingredients: ingredientName
    });

    try {
        await newIngredient.save( (err, newIngredient) => {
            if (err) res.end('Error Saving.');
            res.redirect('/ingredients');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/ingredients');
        res.end();
    }
});

router.post('/addRecipe', async (req, res) => {
    const recipeName = req.body.recipeName;
    const recipeIngredients = req.body.recipeIngredients;
    const recipeSteps = req.body.recipeSteps;

    const newRecipe = new Schemas.Recipes({
        recipe: recipeName,
        ingredients: recipeIngredients,
        steps: recipeSteps
    });

    try {
        await newRecipe.save( (err, newRecipeResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/recipes');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/recipes');
        res.end();
    }
});

module.exports = router;