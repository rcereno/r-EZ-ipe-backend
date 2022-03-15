const express = require('express');
const router = express.Router();
const mongoose = require("../index");
const Schemas = require('../models/Schemas.js');

router.post('/api/test', (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: 'This is just a test' })
  })

router.get('/recipes', async (req, res) => {
    const recipes = Schemas.Recipes;

    const recipeNames = await recipes.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
            res.sendStatus(201);
        } else {
            res.end();
        }
    });
});

router.get('/vegetarianrecipes', async (req, res) => {
    const vegetarian = Schemas.Vegeterian;

    const vegetarianRecipes = await vegetarian.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/veganrecipes', async (req, res) => {
    const vegan = Schemas.Vegan;

    const veganRecipes = await vegan.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/proteinrecipes', async (req, res) => {
    const protein = Schemas.Protein;

    const proteinRecipes = await protein.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
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
    const recipeURL = req.body.recipeURL;

    const newRecipe = new Schemas.Recipes({
        name: recipeName,
        ingredients: recipeIngredients,
        steps: recipeSteps,
        imageURL: recipeURL
    });

    try {
        await newRecipe.save( (err, newRecipeResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/recipes');
            res.sendStatus(201);
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/recipes');
        res.end();
    }
});

  

module.exports = router;