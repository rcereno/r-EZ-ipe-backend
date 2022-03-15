const app = require('../app');
const request = require('supertest');
const { connectDB, disconnectDB } = require('../../index');

describe('API test', () => {
    beforeAll(() => {
        connectDB();
    });

    afterAll(() => {
        disconnectDB();
        server.close();
    });

    describe('POST /api/test', () => {
        it('example request using a mocked database instance', async () => {
            const res = await request.post('/api/test', {
                name: 'Test'
            });

            expect(res.status).toBe(201);
        });
    });
});

describe('post recipe', () => {
    it('returns bad request if name is missing', async () => {
        const res = await request(app).post('/addRecipe').send({
            name: "name",
            ingredients: "ingredients",
            steps: "steps",
            imageURL: "https://www.tacobell.com/_static/web/images/loyalty/side-overlay-2022-E01-Rewards-Doritos-Locos-Tacos-W.png"
        });
        expect(res.statusCode).toEqual(201);
    });

});

describe('get recipe', () => {
    it('returns bad request if recipe', async () => {
        const res = await request(app).get('/recipes');
        expect(res.statusCode).toEqual(201);
    });

});

describe('post ingredient', () => {
    it('returns bad request if ingredient is missing', async () => {
        const res = await request(app).post('/addIngredient').send({
            name: "name",
            ingredients: "ingredients",
            steps: "steps",
            imageURL: "https://www.tacobell.com/_static/web/images/loyalty/side-overlay-2022-E01-Rewards-Doritos-Locos-Tacos-W.png"
        });
        expect(res.statusCode).toEqual(201);
    });

});