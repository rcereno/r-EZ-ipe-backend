const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const recipeSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'},
    imageURL:{type:String, ref:'true'}
});

const ingredientSchema = new Schema({
    ingredients: {type:String, required:true}
});

const vegetarianSchema = new Schema({
    recipe: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const proteinSchema = new Schema({
    recipe: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const veganSchema = new Schema({
    recipe: {type:String, required:true},
    ingredients: {type:String, ref:'true'},
    steps:{type:String,ref:'true'}
});

const Recipes = mongoose.model('recipes', recipeSchema, 'recipes');
const Ingredients = mongoose.model('ingredients',ingredientSchema,'ingredients');
const Vegetarian = mongoose.model('vegetarian', vegetarianSchema, 'vegetarian' );
const Protein = mongoose.model('protein', proteinSchema, 'protein' );
const Vegan = mongoose.model('vegan', veganSchema, 'vegan' );
const mySchemas = {'Recipes':Recipes,'Ingredients':Ingredients};


module.exports = mySchemas;