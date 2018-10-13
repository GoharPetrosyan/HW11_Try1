class Cars {

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;

        
        
    }


    creat(idCars) {
        const elm = document.getElementById(idCars);
        const carImg = document.createElement('img');
        const paragraf = document.createElement('p');
        const text = document.createTextNode(this.name + ' ' + this.speed + 'px/s');
        carImg.setAttribute("src", this.image);
        elm.appendChild(carImg);
        paragraf.appendChild(text);
        elm.appendChild(paragraf);
    }

    add(idCar, array) {
        let elm = document.querySelector(idCar);
        elm.style.border = 'solid 3px #ff0000'
        array.push(this.image);
        // console.log(array)
    }

    // add(classRoad) {
    //     const elm = document.querySelector(classRoad);
    //     const img = document.createElement('img');
    //     img.setAttribute('src', this.image);
    //     elm.appendChild(img);
    // }
}

class Mercedes extends Cars {
    constructor(name, speed) {
        super(name, speed);
        this.image = 'car1.png';

    }

}



class Bmw extends Cars {
    constructor(name, speed) {
        super(name, speed)
        this.image = 'car2.png';
    }
}

class Toyota extends Cars {
    constructor(name, speed) {
        super(name, speed);
        this.image = 'car3.png';
    }
}

class Lexus extends Cars {
    constructor(name, speed) {
        super(name, speed);
        this.image = 'car4.png';
    }
}

class Audi extends Cars {
    constructor(name, speed) {
        super(name, speed);
        this.image = 'car5.png';
    }
}
