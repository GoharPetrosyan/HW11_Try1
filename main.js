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
let arrayCarSpeed = [];
let carArray = [mercedes, bmw, toyota, lexus, audi];
let arrayFactor = [];
let speedFactor = [];

//*************Events for Cars */



addMercedes.addEventListener('click', () => { mercedes.add('#idMercedes', arrayCar, arrayCarSpeed ); renderCar(); multiplay()});
addBmw.addEventListener('click', () => { bmw.add('#idBmw', arrayCar, arrayCarSpeed); renderCar() ; multiplay()});
addToyota.addEventListener('click', () => { toyota.add( '#idToyota' , arrayCar, arrayCarSpeed); renderCar(); multiplay()});
addAudi.addEventListener('click', () => { audi.add('#idAudi' , arrayCar, arrayCarSpeed); renderCar() ; multiplay()});
addLexus.addEventListener('click', () => { lexus.add( '#idLexus' , arrayCar, arrayCarSpeed); renderCar(); multiplay()});

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
let first = document.querySelector('#firstCar');
let second = document.querySelector('#secondCar');
let third = document.querySelector('#thirdCar');
let firstImg;
let secondImg;
let thirdImg;

function renderCar() {
    if (arrayCar.length === 3) {
        
        firstImg = document.createElement('img');
        firstImg.setAttribute('src', arrayCar[0]);
        first.appendChild(firstImg);
        
        secondImg = document.createElement('img');
        secondImg.setAttribute('src', arrayCar[1]);
        second.appendChild(secondImg);
        
        thirdImg = document.createElement('img');
        thirdImg.setAttribute('src', arrayCar[2]);
        third.appendChild(thirdImg);
    }
}



//*****************Start button function */



function multiplay() {
    if (arrayFactor.length === 1 && arrayCarSpeed.length === 3) {
        arrayCarSpeed.forEach(function(item) {
        speedFactor.push(item * arrayFactor[0]);
        })
    }
}

function startFunction() {
    setInterval(drive, 1000);
}


let firstCarSpeed = 0;
let secondCarSpeed = 0;
let thirdCarSpeed = 0;

function drive() {
    firstCarSpeed += speedFactor[0];
    // firstImg.style.paddingLeft = 
    firstImg.style.left = firstCarSpeed + 'px';
    // console.log(firstCar.style.marginLeft)
    console.log(firstCarSpeed)
    secondCarSpeed += speedFactor[1];
    secondImg.style.left = secondCarSpeed + 'px';
    thirdCarSpeed += speedFactor[2];
    thirdImg.style.left = thirdCarSpeed + 'px';
}

function finish() {
    
}







