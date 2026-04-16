import { Point } from "./modules/Point.js";
import Circle from "./modules/Circle.js";

const pt1 = new Point(100, 100);

const circle1 = new Circle(50, 50, 75);

console.log(circle1.perimeter);
console.log(circle1.area);

circle1.move(30, 40);

circle1.insideCircle(pt1);
circle1.move(-100, -100);
circle1.insideCircle(pt1);