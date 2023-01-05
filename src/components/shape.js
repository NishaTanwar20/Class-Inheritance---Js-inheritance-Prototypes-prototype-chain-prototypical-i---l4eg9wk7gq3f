// declare class
// class Shape{
//     drawShape(){

//     }
//     calculateArea(){

//     }

//     color='blue';
// }
// // export class using module.exports
// module.exports=Shape;
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    drawShape() {
      console.log(`Drawing a shape with color: ${this.color}`);
    }
  
    calculateArea() {
      throw new Error('You must override the calculateArea method in a subclass');
    }
  }
  
  module.exports = Shape;
  