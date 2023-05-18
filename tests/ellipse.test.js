const Ellipse = require("../lib/Ellipse.js");

describe ("Ellipse", () => {
    
    it("should render logo with input parameters of logoName, chosenTextColor, chosenShapeColor", () => {
        
        const ellipse = new Ellipse ("ELM", "#fff", "Black");

        expect(ellipse.renderLogo()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <ellipse cx="150" cy="100" rx="130" ry="90" style="fill:Black;stroke:black;stroke-width:1" />
        <text x="50%" y="120" text-anchor="middle" fill="#fff" font-size="60">ELM</text>
        </svg>
        `
        );

    })
});