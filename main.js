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


//**********Craet Cars Objects */

let mercedes = new Mercedes('Mersedes', 48);
let bmw = new Bmw ('BMW', 50);
let toyota = new Toyota('Toyota', 47);
let lexus = new Lexus('Lexus', 51);
let audi = new Audi('Audi', 49);

//***********Creat Tracks Objects */

let asphalt = new Asphalt('Asphalt', 1.2);
let ice = new Ice('Ice', 0.7);
let ground = new Ground('Ground', 1);

//***********Creats Cars in Manu Bar */

mercedes.creat('idMercedes');
bmw.creat('idBmw');
toyota.creat('idToyota');
lexus.creat('idLexus');
audi.creat('idAudi');

//**************Creats Tracks in Menu Bar */

asphalt.creat('idAsphalt');
ice.creat('idIce');
ground.creat('idGround');


//**************Finde Cars */

let addMercedes = document.querySelector('#idMercedes');
let addBmw = document.querySelector('#idBmw');
let addToyota = document.querySelector('#idToyota');
let addLexus = document.querySelector('#idLexus');
let addAudi = document.querySelector('#idAudi');

//*************** Finde Tracks */ 

let addAsphalt = document.querySelector('#idAsphalt');
let addIce = document.querySelector('#idIce');
let addGround = document.querySelector('#idGround');


//************Creat arrays of Global variables */

let arrayCar = [];
let elmTrack;
let carArray = [mercedes, bmw, toyota, lexus, audi];
let arrayFactor = [];
let attachmentFactor;

//*************Events for Cars */



addMercedes.addEventListener('click', () => { mercedes.add('#idMercedes', arrayCar ); renderCar() });
addBmw.addEventListener('click', () => { bmw.add('#idBmw', arrayCar); renderCar()});
addToyota.addEventListener('click', () => { toyota.add( '#idToyota' , arrayCar); renderCar()});
addAudi.addEventListener('click', () => { audi.add('#idAudi' , arrayCar); renderCar()});
addLexus.addEventListener('click', () => { lexus.add( '#idLexus' , arrayCar); renderCar()});

//**************Events for tracks */

addAsphalt.addEventListener('click', () => { asphalt.add('#idAsphalt', arrayFactor); fillAsphal(); multiplay() });
addIce.addEventListener('click', () => { ice.add('#idIce', arrayFactor); fillIce(); multiplay() });
addGround.addEventListener('click', () => { ground.add('#idGround', arrayFactor); fillGround(); multiplay() });


//***************Creat functions Render track */

function fillAsphal() {
    let table = document.querySelector('#idTable');
    table.style.backgroundColor = '#d8d8d8';

}




function fillIce() {
    let table = document.querySelector('#idTable');
    table.style.backgroundColor = '#c5f1f2';
}

function fillGround() {
    let table = document.querySelector('#idTable');
    table.style.backgroundColor = '#d9d1a1';
}

//*****************Creat function render cars */



function renderCar() {
    if (arrayCar.length === 3) {
        let first = document.querySelector('#firstCar');
        let firstImg = document.createElement('img');
        firstImg.setAttribute('src', arrayCar[0]);
        first.appendChild(firstImg);
        let second = document.querySelector('#secondCar');
        let secondImg = document.createElement('img');
        secondImg.setAttribute('src', arrayCar[1]);
        second.appendChild(secondImg);
        let third = document.querySelector('#thirdCar');
        let thirdImg = document.createElement('img');
        thirdImg.setAttribute('src', arrayCar[2]);
        third.appendChild(thirdImg);
    }
}



//*****************Start button function */

// startFunction() {

// }

function multiplay() {
    if (arrayFactor.length === 1) {
        attachmentFactor = arrayFactor[0];
        
    }

    if (arrayCar.length === 3) {
        carArray.forEach(function(item) {
            console.log(item.speed)
            console.log(attachmentFactor)
            // let elm = item.speed
        })
    }
    
}


// driveCar()



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

