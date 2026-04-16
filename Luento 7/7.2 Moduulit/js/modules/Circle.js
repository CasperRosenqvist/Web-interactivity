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

export default Circle;