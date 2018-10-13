class Track {
    constructor(name, factor) {
        this.name = name;
        this.factor = factor;
    }

    creat(idTracks) {
        const elm = document.getElementById(idTracks);
        const trackImg = document.createElement('img');
        const par = document.createElement('p');
        const text = document.createTextNode(this.name + ' ' + 'Factor' + this.factor);
        trackImg.setAttribute('src', this.trImage);
        elm.appendChild(trackImg);
        par.appendChild(text);
        elm.appendChild(par);


    }

    add(idTrack, array) {
        let elm = document.querySelector(idTrack);
        console.log(elm);
        elm.style.border = 'solid 3px #ff0000';
        array.push(this.trImage);
        console.log(array);
    }
}

class Asphalt extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'asfalt.png';
        this.trImage = 'road1.png';
    }

}

class Ice extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'ice.png';
        this.trImage = 'road2.png';
    }
}

class Ground extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'ground.png';
        this.trImage = 'road3.png';
    }
}
