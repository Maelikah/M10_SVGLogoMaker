// Call required files, classes and modules
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const processAnswers = require("./lib/answers");

console.log("\n");
console.log("Welcome to the SVG Logo Generator!");
console.log("Please provide the following information:");

inquirer

.prompt(questions)

.then((answers) => {
    processAnswers(answers);
})

.catch((err) => {
    console.log(err);
});












