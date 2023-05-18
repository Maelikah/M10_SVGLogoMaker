const Triangle = require("../lib/Triangle.js");

describe ("Triangle", () => {
    
    it("should render logo with input parameters of logoName, chosenTextColor, chosenShapeColor", () => {
        
        const triangle = new Triangle ("ELM", "#fff", "Black");

        expect(triangle.renderLogo()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,0 300,200 0,200" style="fill:Black;stroke:black;stroke-width:1" />
        <text x="50%" y="75%" text-anchor="middle" font-size="60" fill="#fff">ELM</text>
        </svg>
        `
        );

    })
});