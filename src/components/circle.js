// import using require
// const Shape = require('./shape.js');
// // declare class
// class Circle extends Shape{
//     constructor(color){
//         super(color);
//     }
//     calculateArea(){

//     }
// }

// // export class using module.exports
// module.exports=Circle;
const Shape = require('./shape');

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
