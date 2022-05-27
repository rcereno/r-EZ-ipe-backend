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

const loginSchema= new Schema({
    name: {type:String, required:true},
    password:{type:String, ref:'true'},
    accountname: {type:String, ref:'true'}
});

const Recipes = mongoose.model('recipes', recipeSchema, 'recipes');
const Ingredients = mongoose.model('ingredients',ingredientSchema,'ingredients');
const Vegeterian = mongoose.model('vegetarian', vegetarianSchema, 'vegetarian' );
const Protein = mongoose.model('protein', proteinSchema, 'protein' );
const Vegan = mongoose.model('vegan', veganSchema, 'vegan' );
const Login = mongoose.model('login' , loginSchema , 'login' );
const mySchemas = {'Recipes':Recipes,'Ingredients':Ingredients, 'Vegeterian':Vegeterian,'Protein':Protein,'Vegan':Vegan, 'Login':Login};


module.exports = mySchemas;