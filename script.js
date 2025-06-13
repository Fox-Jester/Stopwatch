

function Shape(size){
    this.size = size;
}

Shape.prototype.expolode = () => {
    console.log("boom!");
}

function Circle(color){
    this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);

const c = new Circle;