const Circle = require("../lib/circle") 

describe('Circle', () => {
  
    describe('color', () => {
      it('should render color when render method is called', () => {
        const color = "blue"
        const shape = new Circle();
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  
      });
      it('should return characters', () => {
          const character = "ABK"
          const shape = new Circle(character);
          expect(shape.characters).toEqual(character);
    
        });
        it('should return text color', () => {
          const textColor = "purple"
          const shape = new Circle("BKV", textColor);
          expect(shape.textColor).toEqual(textColor);
    
        });
        it('should return shape color', () => {
          const color = "red"
          const shape = new Circle("BKV", "blue", color);
          expect(shape.color).toEqual(color);
    
        });
        it('should return formation', () => {
          const formation = "circle"
          const shape = new Circle("BKV", "blue", "pink", formation);
          expect(shape.formation).toEqual(formation);
    
        });
    });
  });