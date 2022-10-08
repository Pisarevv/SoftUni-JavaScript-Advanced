class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint,secondPoint){
        let dx = secondPoint.x - firstPoint.x;
        let dy = secondPoint.y - firstPoint.y;

        return Math.sqrt(dx**2 + dy **2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
