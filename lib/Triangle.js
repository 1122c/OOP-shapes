class Triangle {
  constructor(color) {
    // constructor method for creating and initializing an object created with a class. this ahs one parameter called color
    this.color = color; //assigns passed arguement 'color' to the color property of the Circle. 'this' referes to current instances of the class which 'this.color' is the property of 'color' of the Circle object being created
  }

  render() {
    // render is method of Circle class
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
