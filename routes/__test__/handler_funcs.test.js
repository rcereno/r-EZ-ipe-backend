// const { connectDB } = require('../../index');
const mockingoose = require('mockingoose');
// const model = require('../handler');
const {fetchRecipe, createRecipe} = require('../handler');
const Schemas = require("../../models/Schemas.js");


// beforeAll(() => {
//     mongoose.connection.open();
// });

// afterAll(()=>{
//     mongoose.connection.close();
    
// })

describe('fetchRecipe true', () => {
    it ('returns a succesful recipe fetch', async () => {
      mockingoose(Schemas.Recipes).toReturn(
        {
            "_id": {
                "$oid": "629fbf883fb949bf221e7f86"
            },
            "name": "Roasted Asparagus",
            "ingredients": "Asparagus, Olive Oil, Kosher Salt",
            "steps": ["Preheat oven to 425°F.", "Cut off the woody bottom part of the asparagus spears and discard.", "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).", "Place asparagus on foil-lined baking sheet and drizzle with olive oil.", "Sprinkle with salt.", "With your hands, roll the asparagus around until they are evenly coated with oil and salt.", "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.", "They should be tender when pierced with the tip of a knife.", "The tips of the spears will get very brown but watch them to prevent burning.", "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."],
            "timers": [{
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "10"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }, {
                "$numberInt": "0"
            }],
            "imageURL": "https://www.simplyrecipes.com/thmb/nT-Pj9Rpgc3FumHNwJBiy3_vY_4=/736x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__04__roasted-asparagus-horiz-a-1600-04c1d1ad1d77447dbc0769b0ae55b626.jpg",
            "originalURL": "http://www.food.com/recipe/roasted-asparagus-50847"
        }, 'findOne');
      const results = await fetchRecipe('629fbf883fb949bf221e7f86');
      expect(results.name).toBe('Roasted Asparagus');
    });
  });


describe('fetchRecipe false', () => {
    it ('returns a un-succesful recipe fetch', async () => {
  
     mockingoose(Schemas.Recipes).toReturn(undefined, 'findOne')
      const results = await fetchRecipe('5');
      expect(results).toBeUndefined();
    });
  });

test("Adding recipe -- successful path", async () => {
    const addedRecipe = {
      _id : "some id...",
      name: "name",
      ingredients: "ing",
      steps: "steps"
    };
    const toBeAdded = {
        name: "name",
        ingredients: "ing",
        steps: "steps"
    };

    mockingoose(Schemas.Recipes).toReturn(addedRecipe, 'save');
  
    const result = await createRecipe(toBeAdded);
  
    expect(result).toBeTruthy();
    expect(result.name).toBe(toBeAdded.name);
    expect(result.job).toBe(toBeAdded.job);
    expect(result).toHaveProperty("_id");
  
  });

// describe('get recipe', () => {
//     it('returns bad request if recipe', async () => {
//         const res = await request(app).get('/recipes');
//         expect(res.statusCode).toEqual(201);
//     });

// });

// describe('post ingredient', () => {
//     it('returns bad request if ingredient is missing', async () => {
//         const res = await request(app).post('/addIngredient').send({
//             name: "name",
//             ingredients: "ingredients",
//             steps: "steps",
//             imageURL: "https://www.tacobell.com/_static/web/images/loyalty/side-overlay-2022-E01-Rewards-Doritos-Locos-Tacos-W.png"
//         });
//         expect(res.statusCode).toEqual(201);
//     });

// });
