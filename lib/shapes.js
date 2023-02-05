//common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and uses inheritance to re-use the code in the child classes.
class Shapes {
    constructor(characters, textColor, color) {
        this.characters = characters;
        this.textColor = textColor;
        this.color = color;
    }
    renderSVG() {
        //returns a string for the corresponding svg with the given shape color.
    }
    // setShape() {
    //     switch (shape) {
    //         case 'triangle':
    //             const triangle = new Triangle().render()
    //         case 'square':
    //             const square = new Square().render()
    //         case 'circle':
    //             const circle = new Circle().render()
    //             break;
    //     }
    // }
    setColor() {

    }
}
module.exports = Shapes;