export class Circle {
  constructor(color) {
    // constructor method for creating and initializing an object created with a class. this ahs one parameter called color
    this.color = color; //assigns passed arguement 'color' to the color property of the Circle. 'this' referes to current instances of the class which 'this.color' is the property of 'color' of the Circle object being created
  }

  render() {
    // render is method of Circle class
    return `<circle cx="150" cy="100" r="80 fill="${this.color}" />`;
  }
}


