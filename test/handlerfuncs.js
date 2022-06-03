
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require('dotenv/config');

const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');


let dbConnection;


function getDBconnection(){
    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});
}


async function getIngredients(ingredient){
    const ingredients = Schemas.Ingredients;
    let result;

    if (ingredient === undefined){
        result = await ingredients.find();

    }
    else if (ingredient){
        result = await ingredients.find(ingredient);
    }
    
    return result;

}
