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

const Recipes = mongoose.model('recipes', recipeSchema, 'recipes');
const Ingredients = mongoose.model('ingredients',ingredientSchema,'ingredients');
const mySchemas = {'Recipes':Recipes,'Ingredients':Ingredients};

module.exports = mySchemas;