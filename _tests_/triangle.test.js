const Triangle = require("../lib/triangle")

describe('Triangle', () => {

    describe('color', () => {

        it('should return characters', () => {
            const character = "ABK"
            const shape = new Triangle(character);
            expect(shape.characters).toEqual(character);

        });
        it('should return text color', () => {
            const textColor = "purple"
            const shape = new Triangle("BKV", textColor);
            expect(shape.textColor).toEqual(textColor);

        });
        it('should render color when render method is called', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        });
        it('should return formation', () => {
            const formation = "Triangle"
            const shape = new Triangle("BKV", "blue", "pink", formation);
            expect(shape.formation).toEqual(formation);

        });
    });
});