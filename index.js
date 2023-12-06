const inquirer = require("inquirer");
const Circle = require("./lib/Circle.js");
const fs = require("fs");
const Triangle = require("./lib/Triangle.js");
const Square = require("./lib/Square.js");
const Svg = require("./lib/svg.js");

async function main() {
  const answers = await inquirer
    .prompt([
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
      {
        type: "input",
        name: "textcolor",
        message: "what color would you like your text to be?",
      },
      {
        type: "input",
        name: "shapecolor",
        message: "what shape color would you like?",
      },
    ])
    .then((answer) => {
      var newShape;
      // setting value of newShape to chosen shape and color tag
      if (answer.shape === "Circle") {
        newShape = new Circle(answer.shapecolor);
      } else if (answer.shape === "Triangle") {
        newShape = new Triangle(answer.shapecolor);
      } else if (answer.shape === "Square") {
        newShape = new Square(answer.shapecolor);
      }

      const newSvg = new Svg();
      newSvg.setShape(newShape);
      newSvg.setText(answer.textcolor, answer.text);
      return fs.writeFileSync("logo.svg", newSvg.renderSvg());
    });
}

main();
