// import using require
const Shape = require('./shape.js');
// declare class
class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(){

    }
}

// export class using module.exports
module.exports=Circle;
