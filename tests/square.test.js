// Constructor is imported
const Square = require("../lib/Square.js");

// A test is created to check the logo is rendered based on input parameters
describe ("Square", () => {
    
    it("should render logo with input parameters of logoName, chosenTextColor, chosenShapeColor", () => {
        
        const square = new Square ("ELM", "#fff", "Black");

        expect(square.renderLogo()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" y="0" width="200" height="200" style="fill:Black;stroke:black;stroke-width:1" />
        <text x="100" y="120" text-anchor="middle" fill="#fff" font-size="60">ELM</text>
        </svg>
        `
        );

    })
});