class Square {
  constructor(color) {
    // constructor method for creating and initializing an object created with a class. this ahs one parameter called color
    this.color = color; //assigns passed arguement 'color' to the color property of the Circle. 'this' referes to current instances of the class which 'this.color' is the property of 'color' of the Circle object being created
  }

  render() {
    // render is method of Circle class
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = Square;
