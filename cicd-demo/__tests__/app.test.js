const request = require("supertest");
const server = require("../app");

afterAll(() => server.close && server.close());

test("GET / returns greeting", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toContain("CI/CD demo");
});

test("GET /health returns ok", async () => {
  const res = await request(server).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});
