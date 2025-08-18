const request = require("supertest");
const app = require("../index");
let server;

beforeAll(() => {
  server = app.listen(4000); // start server on another port for tests
});

afterAll((done) => {
  server.close(done); // close server after tests
});

test("GET / should return CI/CD message", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello from CI/CD pipeline!");
});
