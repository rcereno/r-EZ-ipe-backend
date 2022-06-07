const express = require("express");
const { SchemaTypes } = require("mongoose");
const router = express.Router();
const Schemas = require("../models/Schemas.js");
require("cors");



router.get("/recipes", async (req, res) => {
  const recipes = Schemas.Recipes;

  const recipeNames = await recipes.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  }).populate('name').exec();
});

router.get("/vegetarianrecipes", async ( res) => {
  const vegetarian = Schemas.Vegeterian;

  const vegetarianRecipes = await vegetarian.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/veganrecipes", async ( res) => {
  const vegan = Schemas.Vegan;

  const veganRecipes = await vegan.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/proteinrecipes", async ( res) => {
  const protein = Schemas.Protein;

  const proteinRecipes = await protein.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/ketorecipes", async ( res) => {
  const keto = Schemas.Keto;

  const ketoRecipes = await keto.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/lessthanfiverecipes", async (res) => {
  const lessthanfive = Schemas.LessthanFive;

  const lessthanfiveRecipes = await lessthanfive.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/lowbudgetrecipes", async ( res) => {
  const lowbudget = Schemas.Lowbudget;

  const lowbudgetRecipes = await lowbudget.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/paleorecipes", async ( res) => {
  const paleo = Schemas.Paleo;

  const paleoRecipes = await paleo.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/quickeasyrecipes", async (res) => {
  const quickEasy = Schemas.QuickEasy;

  const quickEasyRecipes = await quickEasy.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/seafoodrecipes", async ( res) => {
  const seafood = Schemas.Seafood;

  const seafoodRecipes = await seafood.find({}, (err, recipeData) => {
    if (err) throw err;
    if (recipeData) {
      res.end(JSON.stringify(recipeData));
    } else {
      res.end();
    }
  });
});

router.get("/login", async ( res) => {
  const login = Schemas.Login;

  const ingredientName = await login.find({}, (err, userData) => {
    if (err) throw err;
    if (userData) {
      res.end(JSON.stringify(userData));
    } else {
      res.end();
    }
  });
});


router.post("/addRecipe", async (req, res) => {
  const recipeName = req.body.recipeName;
  const recipeIngredients = req.body.recipeIngredients;
  const recipeSteps = req.body.recipeSteps;
  const recipeURL = req.body.recipeURL;
  const sourceURL = req.body.originalURL;

  const newRecipe = new Schemas.Recipes({
    name: recipeName,
    ingredients: recipeIngredients,
    steps: recipeSteps,
    imageURL: recipeURL,
    originalURL: sourceURL,
  });

  try {
    await newRecipe.save((err, newRecipeResults) => {
      if (err) res.redirect("/recipes");
      res.response(201);
      res.end();
    });
  } catch (err) {
    console.log(err);
    res.response(400);
    res.redirect("/recipes");
    res.end();
  }
});

router.post("/addUser", async (req, res) => {
  const user = req.body.name;
  const userPassword = req.body.password;
  const userName = req.body.accountname;

  const newLogin = new Schemas.Login({
    name: user,
    password: userPassword,
    accountname: userName,
  });

  try {
    await newLogin.save((err, newRecipeResults) => {
      if (err) res.redirect("/login");
      res.end();
    });
  } catch (err) {
    console.log(err);
    res.redirect("/login");
    res.end();
  }
});

module.exports = router;