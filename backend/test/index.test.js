const request = require('supertest');
const app = require('../src/app');


describe("API Test", () => {
    test('Setting up dev', async () => {
        const res = await request(app).get("/api/hi");
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('hi');
    });
});
