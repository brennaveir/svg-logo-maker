const Circle = require("../lib/circle")

describe('Circle', () => {

    describe('color', () => {

        it('should return characters', () => {
            const character = "ABC"
            const shape = new Circle(character);
            expect(shape.characters).toEqual("ABC");

        });
        it('should return text color', () => {
            const textColor = "purple"
            const shape = new Circle("ABC", textColor);
            expect(shape.textColor).toEqual("purple");

        });
        it('should render color when render method is called', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

        });
        it('should return formation', () => {
            const formation = "circle"
            const shape = new Circle("ABC", "blue", "pink", formation);
            expect(shape.formation).toEqual("circle");

        });
    });
});