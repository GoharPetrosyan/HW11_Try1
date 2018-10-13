// function addMercedes() {
//     let elm = document.querySelector('.startCarZon1');
//     let myImg = document.createElement('img');
//     myImg.setAttribute('src', 'car1.png');
//     elm.appendChild(myImg);
//     document.getElementById("Mercedes").style.border = 'solid 3px #ff0000'

// }

// function addBMW() {
//     let elm = document.querySelector('.startCarZon2');
//     let myImg = document.createElement('img');
//     myImg.setAttribute('src', 'car2.png');
//     elm.appendChild(myImg);
//     document.getElementById("BMW").style.border = 'solid 3px #ff0000'
// }

// function addToyota() {
//     let elm = document.querySelector('.startCarZon3');
//     let myImg = document.createElement('img');
//     myImg.setAttribute('src', 'car3.png');
//     elm.appendChild(myImg);
//     document.getElementById("Toyota").style.border = 'solid 3px #ff0000'

// }




// let count = 3;
// let newMercedes = document.getElementById('mercedes');
// let newBMW = document.getElementById("bmw");

// while (count > 0) {
//     newMercedes.addEventListener('click', addMercedes);
//     count--;
//     newBMW.addEventListener('click', addBMW)
//     count--;

// }

let mercedes = new Mercedes('Mersedes', 48);
let bmw = new Bmw ('BMW', 50);
let toyota = new Toyota('Toyota', 47);
let lexus = new Lexus('Lexus', 51);
let audi = new Audi('Audi', 49);
let asphalt = new Asphalt('Asphalt', 1.2);
let ice = new Ice('Ice', 0.7);
let ground = new Ground('Ground', 1);


mercedes.creat('idMercedes');
bmw.creat('idBmw');
toyota.creat('idToyota');
lexus.creat('idLexus');
audi.creat('idAudi');
asphalt.creat('idAsphalt');
ice.creat('idIce');
ground.creat('idGround');


let addMercedes = document.querySelector('#idMercedes');
let addBmw = document.querySelector('#idBmw');
let addToyota = document.querySelector('#idToyota');
let addLexus = document.querySelector('#idLexus');
let addAudi = document.querySelector('#idAudi');
let addAsphalt = document.querySelector('#idAsphalt');
let addIce = document.querySelector('#idIce');
let addGround = document.querySelector('#idGround');

let arrayCar = [];
let arrayTrack = [];

addMercedes.addEventListener('click', () => { mercedes.add('#idMercedes', arrayCar )});
addBmw.addEventListener('click', () => { bmw.add('#idBmw', arrayCar)});
addToyota.addEventListener('click', () => { toyota.add( '#idToyota' , arrayCar)});
addAudi.addEventListener('click', () => { audi.add('#idAudi' , arrayCar)});
addLexus.addEventListener('click', () => { lexus.add( '#idLexus' , arrayCar)});
addAsphalt.addEventListener('click', () => {asphalt.add()})


// let arrayCars = [mersedes, bmw, toyota, lexus, audi];


// for (let i = 0; i < arrayCars.length; i++) {
//     array.push(arrayCars[i].image)
// }
// console.log(array)

// arrayCars.forEach( function(elm) { arrayCars[elm].add() } );

// mersedes.add();
// bmw.add();
// toyota.add();

// mersedes.add();
// console.log (mersedes.array);

// console.log(array);

