const Shape = require("./shape");

class Square extends Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        super(logoName, chosenTextColor, chosenShapeColor);
    };

    renderLogo() {
        const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" y="0" width="200" height="200" style="fill:${this.chosenShapeColor};stroke:black;stroke-width:1" />
        <text x="100" y="120" text-anchor="middle" fill="${this.chosenTextColor}" font-size="60">${this.logoName}</text>
        </svg>
        `
    };

};

module.exports = Square;