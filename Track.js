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
        elm.style.border = 'solid 3px #ff0000';
        array.push(this.factor);
        // console.log(treck);
    }
}

class Asphalt extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'asfalt.png';
        this.trImage = 'road1.png';
        this.color = '#d8d8d8';
    }

}

class Ice extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'ice.png';
        this.trImage = 'road2.png';
        this.color = '#c5f1f2';
    }
}

class Ground extends Track {
    constructor(name, factor) {
        super(name, factor);
        this.print = 'ground.png';
        this.trImage = 'road3.png';
        this.color = '#d9d1a1';

    }
}
