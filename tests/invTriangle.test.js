const InvTriangle = require("../lib/InvTriangle.js");

describe ("InvTriangle", () => {
    
    it("should render logo with input parameters of logoName, chosenTextColor, chosenShapeColor", () => {
        
        const invTriangle = new InvTriangle ("ELM", "#fff", "Black");

        expect(invTriangle.renderLogo()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="0,0 300,0 150,200" style="fill:Black;stroke:black;stroke-width:1" />
        <text x="50%" y="45%" text-anchor="middle" font-size="60" fill="#fff">ELM</text>
        </svg>
        `
        );

    })
});