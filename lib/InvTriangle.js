const Shape = require("./shape");

class InvTriangle extends Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        super(logoName, chosenTextColor, chosenShapeColor);
    };

    renderLogo() {
        const svgCode = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="0,0 300,0 150,200" style="fill:${this.chosenShapeColor};stroke:black;stroke-width:1"" />
        <text x="50%" y="45%" text-anchor="middle" font-size="60" fill="${this.chosenTextColor}">${this.logoName}</text>
        </svg>
        `
        return svgCode;
    };
};

module.exports = InvTriangle;