
// Call named colors array 
const namedColors = require("./namedColors");

// Create the contents for the .prompt part of inquirer
const questions = [

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
        message: "Type in the color hex value for your logo's text (include #):",
        when: (answers) => {
            if (answers.textcolorChoice === "Hexadecimal Value") {
                return true;
            }
                return false;
        },
        validate: function (input) {
            const texthexRegEx = /^#[a-f0-9]{6}$|^#[a-f0-9]{3}$/i;
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
        message: "Type in the color hex value for your logo's shape (include #) :",
        when: (answers) => {
            if (answers.shapecolorChoice === "Hexadecimal Value") {
                return true;
            }
                return false;
        },
        validate: function (input) {
            const shapehexRegEx = /^#[a-f0-9]{6}$|^#[a-f0-9]{3}$/i;
            if(!shapehexRegEx.test(input)) {
                return "Please enter a valid hex value";
            }
                return true;
        }   
    },
]

module.exports = questions;