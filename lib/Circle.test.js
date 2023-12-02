const Circle = require("./Circle"); // require is node.js function for importing modules. ./Circle specifies path to file that exports Circle class. ./ says file located in same directory as test file

test("Circle renders correct svg", () => {
  //test is jest function followed by string that describes what test should verify. body of function below
  const circle = new Circle("blue"); //new Circle creates object with color blue
  expect(circle.render()).toBe(
    '<circle cx="150" cy="100" r="80" fill="blue" />'
  ); //expect(circle.render()) is jest function that specifies testing value. called here with result of 'circle.render()' method. render() method should return svg circle.

  //.toBe is jest matcher function to test for exact equality. output of circle.render() should be circle positioned at 150,100 and r=80
});
