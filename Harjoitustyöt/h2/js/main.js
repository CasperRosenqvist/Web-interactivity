import { Rectangle } from "./modules/Rectangle.js";
const canvas = document.querySelector("#c");
const ctx = canvas.getContext("2d");



const rect1 = new Rectangle(50, 50, 150, 100);

const rect2 = new Rectangle(80, 120, 80, 80);




console.log(rect1);
console.log(rect2);
console.log(rect1.area);
console.log(rect2.area);
//rect2.move(0, 40)

//Piirretään suorakulmiot
rect1.draw(ctx, "#1A97A5");
rect2.draw(ctx, "#EABA43");

if (rect1.overlap(rect2)) {
    console.log("Rectangles overlap");
} else {
    console.log("Rectangles don't overlap");
}

