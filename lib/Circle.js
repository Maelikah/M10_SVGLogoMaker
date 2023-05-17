const Shape = require("./shape");

class Circle extends Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        super(logoName, chosenTextColor, chosenShapeColor);
    };

    renderLogo() {
        const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <circle cx="100" cy="100" r="80" fill="${this.chosenShapeColor}" />
        <text x="100" y="110" text-anchor="middle" fill="${this.chosenTextColor}" font-size="40">${this.logoName}</text>
        </svg>
        `
    };

};

module.exports = Circle;