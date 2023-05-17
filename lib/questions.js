const inquirer = require("inquirer");
const fs = require("fs");

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
        choices: ["Color Name", "Hexadecimal value"],
        
    },

    {
        type: "list",
        name: "colorName",
        message: "Choose the text color for your logo:",
        choices: [""],
        when: (answers) => {
            if (answers.textcolorChoice === "Color Name") {
                return true;
            }
                return false;
        }
        
    },

        
])