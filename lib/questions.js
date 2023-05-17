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
        choices: namedColors,
        when: (answers) => {
            if (answers.textcolorChoice === "Hexadecimal Value") {
                return true;
            }
                return false;
        },
        validate: function (input) {
            const hexRegEx = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
            if(!hexRegEx.test(input)) {
                return "Please enter a valid hex value";
            }
                return true;
        }   
    },

])

.then(answers => {
    console.log("Logo Name: " , answers.logoName);
    console.log("Text Color Format: " , answers.textcolorChoice);
    console.log("Text color Chosen: " , answers.textcolorName);
    console.log("Text color Hexadecimal Chosen: ", answers.textcolorHex);
})