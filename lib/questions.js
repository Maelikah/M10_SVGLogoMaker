const inquirer = require("inquirer");
const fs = require("fs");
const namedColors = require("./namedColors");

inquirer

.prompt ([

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
        choices: ["Circle", "Square", "Triangle"],
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

.then(answers => {
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
})