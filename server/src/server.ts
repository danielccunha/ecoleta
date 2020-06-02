import "dotenv/config";
import express from "express";
import chalk from "chalk";
import path from "path";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(port, () => {
  console.log(`Server is listening on port ${chalk.green(port)}`);
});
