const express = require('express');
const cors = require('cors');
const router = express.Router();
const Schemas = require('../models/Schemas.js');






// router.post('/api/test', (req, res) => {
//     const { name } = req.body;
//     res.status(201).json({ message: 'This is just a test' })
//   })

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

router.get('/ingredients/:ingredients', async (req, res) => {
    const id = req.params.ingredients;
    let result = findRecipesbyIngredients(ingredients);
 
    if(result === undefined || result.length == 0){
        res.status(404).send('Resource not found!');
    }
    else{
        result = {users_list: result};
        res.send(result)
    }
});
  
 
const findRecipesbyIngredients = (name) => {
    return users['users_list'].find( (recipes) => recipes.ingredients === name);
}


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

router.get('/ketorecipes', async (req, res) => {
    const keto = Schemas.Keto;

    const ketoRecipes = await keto.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/lessthanfiverecipes', async (req, res) => {
    const lessthanfive = Schemas.LessthanFive;

    const lessthanfiveRecipes = await lessthanfive.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/lowbudgetrecipes', async (req, res) => {
    const lowbudget = Schemas.Lowbudget;

    const lowbudgetRecipes = await lowbudget.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/paleorecipes', async (req, res) => {
    const paleo = Schemas.Paleo;

    const paleoRecipes = await paleo.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/quickeasyrecipes', async (req, res) => {
    const quickEasy = Schemas.QuickEasy;

    const quickEasyRecipes = await quickEasy.find({}, (err, recipeData) => {
        if (err) throw err;
        if (recipeData) {
            res.end(JSON.stringify(recipeData));
        }    else {
                res.end();
        }
    });
});

router.get('/seafoodrecipes', async (req, res) => {
    const seafood = Schemas.Seafood;

    const seafoodRecipes = await seafood.find({}, (err, recipeData) => {
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

router.get('/login', async (req, res) => {
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

//GOOOD ONE
// router.get('/login', async (req, res) => {
//     const login = Schemas.Login;

//     const ingredientName = await login.find({}, (err, userData) => {
//         if (err) throw err;
//         if (userData) {
//             res.end(JSON.stringify(userData));
//         } else {
//             res.end();
//         }
//     });
// });
// router.get('/login', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
//   });

router.post('/addIngredient', async (req, res) => {
    const ingredientName = req.body.ingredientName;

    const newIngredient = new Schemas.Ingredients({
        ingredients: ingredientName
    });

    try {
        await newIngredient.save( (err, newIngredient) => {
            if (err) res.redirect('/ingredients');
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
    const sourceURL = req.body.originalURL;

    const newRecipe = new Schemas.Recipes({
        name: recipeName,
        ingredients: recipeIngredients,
        steps: recipeSteps,
        imageURL: recipeURL,
        originalURL: sourceURL

    });

    try {
        await newRecipe.save( (err, newRecipeResults) => {
            if (err) res.redirect('/recipes');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/recipes');
        res.end();
    }
});


router.post('/addUser', async (req, res) => {
    const user = req.body.name;
    const userPassword = req.body.password;
    const userName = req.body.accountname;

    const newLogin = new Schemas.Login({
        name: user,
        password: userPassword,
        accountname: userName
    
    });

    try {
        await newLogin.save( (err, newRecipeResults) => {
            if (err) res.redirect('/login');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/login');
        res.end();
    }
});




module.exports = router;
