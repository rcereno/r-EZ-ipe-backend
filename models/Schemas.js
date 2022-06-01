const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true', required:true},
    steps:{type:Array, ref:'true',required:true},
    imageURL:{type:String, ref:'true'},
    originalURL:{type:String, ref:'true'}
});

const ingredientSchema = new Schema({
    ingredients: {type:String, required:true}
});

const vegetarianSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const proteinSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const veganSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const seafoodSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const quickEasySchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const lowbudgetSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const lessthanfiveSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const ketoSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const paleoSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});


const Recipes = mongoose.model('recipes', recipeSchema, 'recipes');
const Ingredients = mongoose.model('ingredients',ingredientSchema,'ingredients');
const Vegeterian = mongoose.model('vegetarian', vegetarianSchema, 'vegetarian' );
const Protein = mongoose.model('protein', proteinSchema, 'protein' );
const Vegan = mongoose.model('vegan', veganSchema, 'vegan' );
const Seafood = mongoose.model('seafood', seafoodSchema, 'seafood' );
const QuickEasy = mongoose.model('quickeasy', quickEasySchema, 'quickeasy' );
const LowBudget = mongoose.model('lowbudget', lowbudgetSchema, 'lowbudget' );
const LessthanFive = mongoose.model('lessthanfive', lessthanfiveSchema, 'lessthanfive' );
const Keto = mongoose.model('keto', ketoSchema, 'keto' );
const Paleo= mongoose.model('paleo', paleoSchema, 'paleo' );
const mySchemas = {'Recipes':Recipes,'Ingredients':Ingredients, 'Vegeterian':Vegeterian,'Protein':Protein,'Vegan':Vegan, 'Seafood':Seafood, 'QuickEasy':QuickEasy, 'Lowbudget':LowBudget, 'LessthanFive':LessthanFive, 'Keto':Keto, 'Paleo':Paleo};

module.exports = mySchemas;
