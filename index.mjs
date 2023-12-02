import inquirer from "inquirer";
import { Circle } from "./lib/Circle.js";
import fs from "fs";
// import { Triangle } from "./lib/Triangle.js";
// import { Square } from "./lib/Square.js";

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "enter up to 3 characters for the logo:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "list",
      name: "shape",
      message: "choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    //more prompts for colors here
  ]);
}
