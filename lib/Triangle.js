const Shape = require("./shape");

class Triangle extends Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        super(logoName, chosenTextColor, chosenShapeColor);
    };

    renderLogo() {
        const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        <polygon points="100,50 50,150 150,150" fill="${this.chosenShapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.chosenTextColor}">${this.logoName}</text>
        </svg>
        `
    };
};

module.exports = Triangle;