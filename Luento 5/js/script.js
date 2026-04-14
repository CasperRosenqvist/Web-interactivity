const myCar = {
    brand: "Skoda",
    model: "Octavia"
};
console.log(myCar);

const cars = [
    "Volvo",
    "Peugeot",
    "Toyota",
    "Mazda",
    "Ford"
];
console.log(cars[0]);


const myArray = [];
myArray[0] = "First element";
myArray[1] = "Second element";
console.log(myArray);

myArray.push("Third element");
myArray.push("Fourth element");
myArray.push("Fifth element");
myArray.push("Sixth element");
console.log(myArray);

const poppedElement = myArray.pop();
console.log(myArray);
console.log(poppedElement);

const shiftedElement = myArray.shift();
console.log(myArray);
console.log(shiftedElement);

myArray.splice(1, 1);
console.log(myArray);

myArray.splice(1, 0, "Thrid Element");
console.log(myArray);

myArray.splice(1, 1, "New third element");
console.log(myArray);

console.log("Arrayn pituus on: " + myArray.length);
myArray.sort();
console.log(myArray);

var myNumbers = [33, 9, 100, 12, 73];
myNumbers.sort(function (a, b) {
    return (a - b);
});
console.log(myNumbers);

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === "Mazda") {
        console.log(cars[i] + " found");
        break;
    }
};

if (cars.includes("Toyota")) {
    console.log("Found");
}

if (myNumbers.includes(33)) {
    console.log("Number found");
}

if (cars.indexOf("Mazda") != -1) {
    console.log("Mazda found from index: " + cars.indexOf("Mazda"));
    cars.splice(cars.indexOf("Mazda"), 1);
}
console.log(cars);

const months = [
    "Tammi",
    "Helmi",
    "Maalis",
    "Huhti",
    "Touko",
    "Kesä",
    "Heinä",
    "Elo",
    "Syys",
    "Loka",
    "Marras",
    "Joulu"
];

const thisMonth = new Date().getMonth();
console.log("Nyt on " + months[thisMonth] + "kuu");

function createNPC() {
    const weapons = [
        "laser gun",
        "rifle",
        "pistol",
        "sword",
        "RPG"
    ]

    const weapon = weapons[Math.floor(Math.random() * weapons.length)]
    const power = Math.random() * 5;
    const damage = Math.random();
    const health = 1;

    return { weapon, power, damage, health };
}

let NPCs = [];

for (let i = 0; i < 12; i++) {
    NPCs.push(createNPC());
}
console.log(NPCs);

let j = 0;
while (j <= 10) {
    console.log("Value for j is: " + j);
    j++;
}

let k = 100;
do {
    console.log("Value for k is: " + k);
    k++;
} while (k <= 10);

for (let i = 0; i < NPCs.length; i++) {
    let npc = NPCs[i];
    console.log("NPC #" + i + " sisältää seuraavat ominaisuudet");
    for (let prop in npc) {
        console.log(prop + ": " + npc[prop]);
    }
}

let x = 0;
NPCs.forEach(item => {
    console.log("NPC #" + x + " ase on: " + item.weapon);
    x++;
});