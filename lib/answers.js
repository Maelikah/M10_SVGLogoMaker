const fs = require("fs");
const path = require("path");
const namedColors = require("./namedColors");
const shape = require("./shape");
const Circle = require("./Circle");
const Square = require("./Square");
const Triangle = require("./Triangle");
const InvTriangle = require("./InvTriangle");
const Ellipse = require("./Ellipse");


function processAnswers (answers) {
    let chosenTextColor;
    let chosenShapeColor;
    let renderedLogo;
    

    if (answers.textcolorChoice === "Color Name") {
        chosenTextColor = answers.textcolorName;
    } else if (answers.textcolorChoice === "Hexadecimal Value"){
        chosenTextColor = answers.textcolorHex;
    }

    if (answers.shapecolorChoice === "Color Name") {
        chosenShapeColor = answers.shapecolorName;
    } else if (answers.shapecolorChoice === "Hexadecimal Value") {
        chosenShapeColor = answers.shapecolorHex;
    }

    let logoShapeFileName = `${answers.logoShape.toLowerCase()}-logo.svg`;
    let fileName = path.join("./examples/", logoShapeFileName);
    
    switch (answers.logoShape) {
        
        case "Circle": 

            chosenShape = new Circle (answers.logoName, chosenTextColor, chosenShapeColor)
            renderedLogo = chosenShape.renderLogo();
            console.log("The chosen shape is: " , chosenShape);
            console.log("the chosenShape render is:" , chosenShape.renderLogo())
            break;
        
        case "Square": 

            chosenShape = new Square (answers.logoName, chosenTextColor, chosenShapeColor)
            renderedLogo = chosenShape.renderLogo();
            console.log("The chosen shape is: " , chosenShape);
            console.log("the chosenShape render is:" , chosenShape.renderLogo())
            break;

        case "Triangle": 

            chosenShape = new Triangle (answers.logoName, chosenTextColor, chosenShapeColor)
            renderedLogo = chosenShape.renderLogo();
            console.log("The chosen shape is: " , chosenShape);
            console.log("the chosenShape render is:" , chosenShape.renderLogo())
            break;

        case "Inverted Triangle": 

            chosenShape = new InvTriangle (answers.logoName, chosenTextColor, chosenShapeColor)
            renderedLogo = chosenShape.renderLogo();
            console.log("The chosen shape is: " , chosenShape);
            console.log("the chosenShape render is:" , chosenShape.renderLogo())
            break;
        
        case "Ellipse": 

            chosenShape = new Ellipse (answers.logoName, chosenTextColor, chosenShapeColor)
            renderedLogo = chosenShape.renderLogo();
            console.log("The chosen shape is: " , chosenShape);
            console.log("the chosenShape render is:" , chosenShape.renderLogo())
            break; 
        
        default: 

            console.log("Invalid Logo Shape")
            break;
    }


    fs.writeFile(fileName, renderedLogo, (err) => {
        if (err) {
        console.log("Error writing file:", err);
        } else {
        console.log("Successfully generated logo.svg:", fileName);
        }
    });
}


module.exports = processAnswers;