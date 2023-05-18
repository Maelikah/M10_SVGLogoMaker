const Circle = require("./Circle");
const Ellipse = require("./Ellipse");
const InvTriangle = require("./InvTriangle");
const Square = require("./Square");
const Triangle = require("./Triangle");

function createLogo(answers) {
    console.log("Logo Name: " , answers.logoName);
    console.log("Text Color Format: " , answers.textcolorChoice);
    if (answers.textcolorChoice === "Color Name") {
        console.log("Text color Chosen: " , answers.textcolorName);
        const chosenTextColor = answers.textcolorName;
        console.log ("The color for the text logo will be: " , chosenTextColor);
    } else if (answers.textcolorChoice === "Hexadecimal Value"){
        console.log("Text color Hexadecimal Chosen: ", answers.textcolorHex);
        const chosenTextColor = answers.textcolorHex;
        console.log ("The color for the text logo will be: " , chosenTextColor);
    }
        console.log("Logo Shape Chosen: ", answers.logoShape);
    console.log("Shape Color Format: " , answers.shapecolorChoice);
    if (answers.shapecolorChoice === "Color Name") {
        console.log("Shape color Chosen: " , answers.shapecolorName);
        const chosenShapeColor = answers.shapecolorName;
        console.log ("The color for the text logo will be: " , chosenShapeColor);
    } else if (answers.shapecolorChoice === "Hexadecimal Value") {
        console.log("Shape color Hexadecimal Chosen: ", answers.shapecolorHex);
        const chosenShapeColor = answers.shapecolorHex;
        console.log ("The color for the text logo will be: " , chosenShapeColor);
    }

    switch (answers.logoShape) {
        
        case "Circle": 

            let chosenShape = new Circle (answers.logoName, answers.chosenTextColor, answers.chosenShapeColor)
            return chosenShape.render()
            break;
        
        case "Square": 

            let chosenShape = new Square (answers.logoName, answers.chosenTextColor, answers.chosenShapeColor)
            return chosenShape.render()
            break; 
    
        case "Triangle": 

            let chosenShape = new Triangle (answers.logoName, answers.chosenTextColor, answers.chosenShapeColor)
            return chosenShape.render()
            break;

        case "InvTriange": 

            let chosenShape = new InvTriangle (answers.logoName, answers.chosenTextColor, answers.chosenShapeColor)
            return chosenShape.render()
            break;
        
        case "Square": 

            let chosenShape = new Ellipse (answers.logoName, answers.chosenTextColor, answers.chosenShapeColor)
            return chosenShape.render()
            break; 
        
        default: 

            console.log("Invalid Logo Shape")
            break;
    
    }
}

module.exports = createLogo;