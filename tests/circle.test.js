// Constructor is imported
const Circle = require("../lib/Circle.js");

// A test is created to check the logo is rendered based on input parameters
describe ("Circle", () => {
    
    it("should render logo with input parameters of logoName, chosenTextColor, chosenShapeColor", () => {
        
        const circle = new Circle ("ELM", "#fff", "Black");

        expect(circle.renderLogo()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="Black" />
        <text x="100" y="120" text-anchor="middle" fill="#fff" font-size="60">ELM</text>
        </svg>
        `
        );

    })
});