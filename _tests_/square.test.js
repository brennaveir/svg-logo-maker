const Square = require("../lib/square")

describe('Square', () => {

    describe('color', () => {

        it('should return characters', () => {
            const character = "ABC"
            const shape = new Square(character);
            expect(shape.characters).toEqual("ABC");

        });
        it('should return text color', () => {
            const textColor = "purple"
            const shape = new Square("ABC", textColor);
            console.log(shape.textColor)
            expect(shape.textColor).toEqual("purple");

        });
        it('should render color when render method is called', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="40" y="40" width="200" height="200" fill="blue" />');

        });
        it('should return formation', () => {
            const formation = "square"
            const shape = new Square("ABC", "blue", "pink", formation);
            expect(shape.formation).toEqual("square");

        });
    });
});