//Pelikartta

const map = [];

map[0] = "Vanha linnantorni";
map[1] = "Syvä kaivo";
map[2] = "Aurinkoinen metsäaukio";
map[3] = "Nukkuva lohikäärme";
map[4] = "Kapea metsäpolku";
map[5] = "Vanha portti";
map[6] = "Joen ranta";
map[7] = "Tyhjä puupenkki";
map[8] = "Vanha mökki, sisältä kuuluu musiikkia";

const images = [];

images[0] = "torni.png";
images[1] = "kaivo.png";
images[2] = "aukio.png";
images[3] = "dragon.png";
images[4] = "polku.png";
images[5] = "portti.png";
images[6] = "joki.png";
images[7] = "penkki.png";
images[8] = "mokki.png";

const blockMessages = [];

blockMessages[0] = "Haluamasi reitti on liian vaarallinen.";
blockMessages[1] = "Salaperäinen voima estää liikkumisen tuohon suuntaan.";
blockMessages[2] = "Vaikeakulkuinen pusikko estää liikkumisen.";
blockMessages[3] = "Et pääse ohittamaan lohikäärmettä sitä kautta.";
blockMessages[4] = "";
blockMessages[5] = "Portti on kiinni. Etene toiseen suuntaan";
blockMessages[6] = "Joki on liian syvä ylitettäväksi.";
blockMessages[7] = "Metsä on liian tiheä kuljettavaksi.";
blockMessages[8] = "Olet liian peloissasi mennäksesi tuohon suuntaan.";

let mapLocation = 4;
let dragonAlive = true;

console.log(map[mapLocation]);

const image = document.querySelector("#image");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
const button = document.querySelector("#button")
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


output.innerHTML = "Sijaintisi on: " + map[mapLocation];

//Pelaajan syöte
let playersInput = "";

//Pelin viesti
let gameMessage = "";

//Pelissä olevat esineet
let items = ["kivi"];
let itemLocations = [6];
let backPack = [];
let knownItems = ["huilu", "kivi", "miekka"];
let item = "";

//Pelaajan käytössä olevat toiminnot
const actionsForPlayer = [
    "pohjoinen", "itä", "etelä", "länsi", "poimi", "käytä", "jätä"
];
let action = "";



function clickHandler() {
    console.log("Nappia painettu");
    playGame();
}

function playGame() {
    //Lue pelaajan syöte
    playersInput = input.value.toLowerCase();

    // Nollaa gamneMessage ja action
    gameMessage = ""
    action = ""

    for (let i = 0; i < actionsForPlayer.length; i++) {
        if (playersInput.indexOf(actionsForPlayer[i]) !== -1) {
            action = actionsForPlayer[i];
            console.log("Pelaajan valinta: " + action);
            break;
        }
    }

    for (let i = 0; i < knownItems.length; i++) {
        if (playersInput.indexOf(knownItems[i]) !== -1) {
            item = knownItems[i];
            console.log("Pelaajan valitsema esine: " + item)
        }
    }

    switch (action) {
        case "pohjoinen":
            if (mapLocation >= 3) {
                mapLocation -= 3;
            } else {
                gameMessage = blockMessages[mapLocation];
            }
            break;

        case "itä":
            if (mapLocation % 3 != 2) {
                mapLocation += 1;
            } else {
                gameMessage = blockMessages[mapLocation];
            }
            break;

        case "etelä":
            if (mapLocation < 6) {
                mapLocation += 3;
            } else {
                gameMessage = blockMessages[mapLocation];
            }
            break;

        case "länsi":
            if (mapLocation % 3 != 0) {
                mapLocation -= 1;
            } else {
                gameMessage = blockMessages[mapLocation];
            }
            break;

        case "poimi":
            takeItem();
            break;

        case "käytä":
            useItem();
            break;

        case "jätä":
            leaveItem();
            break;

        default:
            gameMessage = "Tuntematon toiminto"
    }
    render();
}

function takeItem() {
    const itemIndexNumber = items.indexOf(item)
    if (itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = "Poimit esineen " + item;
        backPack.push(item);
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);
    } else {
        gameMessage = "Et voi tehdä tätä toimintoa"
    }
}

function useItem() {
    const backPackIndexNumber = backPack.indexOf(item);
    if (backPackIndexNumber === -1) {
        gameMessage = "Sinulla ei ole sitä mukana";
    }
    if (backPack.length === 0) {
        gameMessage = "Sinulla ei ole repussa mitään. "
    }

    if (backPackIndexNumber !== -1) {
        switch (item) {
            case "huilu":
                if (mapLocation === 8 && backPack.length === 1) {
                    gameMessage = "Yhdyt huilullasi mökistä kantautuvaan kauniiseen musiikkiin."
                    items.push("miekka")
                    itemLocations.push(8)
                } else {
                    gameMessage = "Kaunis musiikki kaikuu ympärilläsi."
                }
                break;

            case "miekka":
                if (mapLocation === 3 && dragonAlive === true) {
                    dragonAlive = false;
                    gameMessage = "Heilautat miekkaa ja tapat lohikäärmeen! Vanha portti idässä avautuu..."
                } else {
                    gameMessage = "Heiluttelet miekkaasi tylsistyneenä..."
                }
                break;

            case "kivi":
                if (mapLocation === 1) {
                    gameMessage = "Pudotat kiven kaivoon."
                    backPack.splice(backPackIndexNumber, 1)
                    items.push("huilu")
                    itemLocations.push(1)
                } else {
                    gameMessage = "Pyörittelet kive taskussassi"
                }
                break;
        }
    }
}



function leaveItem() {
    if (backPack.length != 0) {
        const backPackIndexNumber = backPack.indexOf(item);
        if (backPackIndexNumber !== -1) {
            gameMessage = "Jätit esineen: " + item;
            items.push(backPack[backPackIndexNumber]);
            itemLocations.push(mapLocation)
            backPack.splice(backPackIndexNumber, 1);
        } else {
            gameMessage = "Et voi tehdä tätä."
        }
    } else {
        gameMessage = "Sinulla ei ole mitään mukana."
    }
}



const minimapCells = document.querySelectorAll(".minimap div");

function updateMinimap() {
    for (let i = 0; i < minimapCells.length; i++) {
        minimapCells[i].style.backgroundColor = "#3f5f3a";
        minimapCells[i].style.color = "#000";
    }
    minimapCells[mapLocation].style.backgroundColor = "#2f8f2f";
    minimapCells[mapLocation].style.color = "white";
}


function render() {
    //Päivitä kuva
    if (dragonAlive === false && mapLocation === 3) {
        image.src = "images/dragonDead.png";
    } else if (dragonAlive === false && mapLocation === 5) {
        image.src = "images/porttiAuki.png";
    } else {
        image.src = "images/" + images[mapLocation];
    }

    updateMinimap();

    //päivitä sijainti näytöllä
    output.innerHTML = "<b>Sijaintisi on: </b>" + map[mapLocation];

    //Pelin viesti
    output.innerHTML += "<br>" + gameMessage;

    // Esineet pelissä
    for (let i = 0; i < items.length; i++) {
        if (mapLocation === itemLocations[i]) {
            //Jos ruudussa on esine, kerro se pelaajalle
            output.innerHTML += "<br> Näet esineen: " + items[i];
        }
    }

    if (backPack.length > 0) {
        output.innerHTML += "<br>Mukanasi on nyt: " + backPack.join(", ");
    }

    console.log("Pelissä: " + items);
    console.log("Repussa: " + backPack);
};

render();