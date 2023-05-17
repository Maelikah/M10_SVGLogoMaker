// Parent class that will contain values that repeat among shapes

class Shape {

    constructor(logoName, chosenTextColor, chosenShapeColor) {
        this.logoName = logoName;
        this.chosenTextColor = chosenTextColor;
        this.chosenShapeColor = chosenShapeColor;
    }
}; 

// export the class to be used in other files

module.exports = Shape; 