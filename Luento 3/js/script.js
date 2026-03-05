let myCar = {
    brand: "Skoda",
    model: "Octavia",
    color: "White",
    year: 2021,
    fullName: function () { return this.brand + " " + this.model; }
};
console.log(myCar);
console.log(myCar.year);
console.log(myCar.fullName());
console.log(myCar.brand);
console.log(myCar["brand"]);

for (let property in myCar) {
    console.log(property)
}

for (let property in myCar) {
    console.log(property + ": " + myCar[property])
}

let car2 = new Object();
car2.brand = "Mercedes-Benz";
car2.model = "EQE";
car2.color = "Black";
car2.year = 2023;
car2.fullName = function () { return this.brand + " " + this.model; }
car2.age = function () {
    const d = new Date();
    const currentYear = d.getFullYear();
    return currentYear - this.year;
}
console.log(car2);
console.log(car2.year);
console.log(car2.fullName());
console.log(car2.age());

