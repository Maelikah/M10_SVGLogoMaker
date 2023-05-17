const Shape = require("./shape");

class Ellipse extends Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        super(logoName, chosenTextColor, chosenShapeColor);
    };

    renderLogo() {
        const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <ellipse cx="150" cy="100" rx="130" ry="90" style="fill:${this.chosenShapeColor};stroke:black;stroke-width:1" />
        <text x="50%" y="120" text-anchor="middle" fill="${this.chosenTextColor}" font-size="60">${this.logoName}</text>
        </svg>
        `
    };
};

module.exports = Ellipse;