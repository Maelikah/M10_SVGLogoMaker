const inquirer = require("inquirer");
const fs = require("fs");
const responses = require("./lib/createLogo");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const InvTriange = require("./lib/InvTriangle");
const Ellipse = require("./lib/Ellipse");

console.log("Welcome to the SVG Logo Generator!");
console.log("Pleae provide the following information:");