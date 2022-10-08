class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter() { return 2 * this.radius};
    set diameter(value) {
        this.radius = value /2;
    }
    get area() {
        return Math.PI * this.diameter;
    }




    
}

let c = new Circle(2);
c.diameter = 15;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
