const Square = require("../lib/square") 

describe('Square', () => {
  
    describe('color', () => {
      it('should render color when render method is called', () => {
        const color = "blue"
        const shape = new Square();
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect x="40" y="40" width="200" height="200" fill="blue" />');
  
      });
      it('should return characters', () => {
          const character = "ABK"
          const shape = new Square(character);
          expect(shape.characters).toEqual(character);
    
        });
        it('should return text color', () => {
          const textColor = "purple"
          const shape = new Square("BKV", textColor);
          expect(shape.textColor).toEqual(textColor);
    
        });
        it('should return shape color', () => {
          const color = "red"
          const shape = new Square("BKV", "blue", color);
          expect(shape.color).toEqual(color);
    
        });
        it('should return formation', () => {
          const formation = "square"
          const shape = new Square("BKV", "blue", "pink", formation);
          expect(shape.formation).toEqual(formation);
    
        });
    });
  });