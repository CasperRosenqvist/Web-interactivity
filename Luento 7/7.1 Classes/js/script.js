class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    get perimeter() {
        return 2 * this.r * Math.PI;
    }
    get area() {
        return Math.PI * Math.pow(this.r, 2);
    }
    move(x, y) {
        this.cx += x;
        this.cy += y;
    }
    insideCircle(pt) {
        const a = Math.abs(pt.x - this.cx);
        const b = Math.abs(pt.y - this.cy);
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (c > this.r) {
            console.log("Point is outside the circle");
        } else {
            console.log("Point is inside the circle");
        }
    }
}

const pt1 = new Point(100, 100);

const circle1 = new Circle(50, 50, 75);

console.log(circle1.perimeter);
console.log(circle1.area);

circle1.move(30, 40);

circle1.insideCircle(pt1);
circle1.move(-100, -100);
circle1.insideCircle(pt1);