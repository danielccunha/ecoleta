import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();
const port = process.env.PORT || 3333;

app.get("/users", (request, response) => {
  return response.json(["Daniel", "Diego"]);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${chalk.green(port)}`);
});
