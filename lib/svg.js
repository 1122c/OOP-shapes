class Svg {
    constructor(){
        this.shape = ""
        this.text = ""

    }
    setShape(chosenShape){
        this.shape = chosenShape.render()
    }
    setText(chosenColor, chosenText){
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`;
    }

    renderSvg(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.text}</svg>`;
    }

}

// example of how methods and properties of Svg class string together
// var newSvg = new Svg().setShape("circle").setText("blue", "666").renderSvg()

module.exports = Svg;