const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "./examples/logo-.svg";
const questions = require("./lib/questions");
const createLogo = require("./lib/createLogo");
const namedColors = require("./lib/namedColors");
const shape = require("./lib/shape");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const InvTriange = require("./lib/InvTriangle");
const Ellipse = require("./lib/Ellipse");

console.log("Welcome to the SVG Logo Generator!");
console.log("Please provide the following information:");

inquirer

.prompt([

    {
        type: "input",
        name: "logoName",
        message: "Enter a word for the logo's name (up to 3 characters)",
        validate: function (input) {
            if (input.length > 3) {
                return "Please enter a word with up to 3 characters"
            }
            return true;
        }    
    },

    {
        type: "list",
        name: "textcolorChoice",
        message: "Provide the format you prefer to input your logo's text color",
        choices: ["Color Name", "Hexadecimal Value"],    
    },

    {
        type: "list",
        name: "textcolorName",
        message: "Choose the text color for your logo:",
        choices: namedColors,
        when: (answers) => {
            if (answers.textcolorChoice === "Color Name") {
                return true;
            }
                return false;
        }   
    },

    {
        type: "input",
        name: "textcolorHex",
        message: "Type in the color hex value for your logo's text :",
        when: (answers) => {
            if (answers.textcolorChoice === "Hexadecimal Value") {
                return true;
            }
                return false;
        },
        validate: function (input) {
            const texthexRegEx = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
            if(!texthexRegEx.test(input)) {
                return "Please enter a valid hex value";
            }
                return true;
        }   
    },

    {
        type: "list",
        name: "logoShape",
        message: "Choose the shape for your logo:",
        choices: ["Circle", "Square", "Triangle", "Inverted Triangle", "Ellipse"],
    },

    {
        type: "list",
        name: "shapecolorChoice",
        message: "Provide the format you prefer to input your logo's shape color",
        choices: ["Color Name", "Hexadecimal Value"],    
    },

    {
        type: "list",
        name: "shapecolorName",
        message: "Choose the shape's color for your logo:",
        choices: namedColors,
        when: (answers) => {
            if (answers.shapecolorChoice === "Color Name") {
                return true;
            }
                return false;
        }   
    },

    {
        type: "input",
        name: "shapecolorHex",
        message: "Type in the color hex value for your logo's shape :",
        when: (answers) => {
            if (answers.shapecolorChoice === "Hexadecimal Value") {
                return true;
            }
                return false;
        },
        validate: function (input) {
            const shapehexRegEx = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
            if(!shapehexRegEx.test(input)) {
                return "Please enter a valid hex value";
            }
                return true;
        }   
    },
])

.then((answers) => {

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

        case "InvTriange": 

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
        console.log("Successfully generated logo:", fileName);
        }
    });
})









// init();


// function renderLogo(answers) {
//     const svg = createLogo(answers);
//     fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
// }


// function init () {
//     inquirer
//     .prompt(questions)
//     .then((answers) => {
//         renderLogo(answers);
//     })
//     .catch(err => {
//         console.log(err)
//     });
// }