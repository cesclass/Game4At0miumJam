"use strict";

function Elder() {

    /*  Attributs  */
    this.img = window.mainDiv.createElement('img');

    /*  Methodes  */
    this.show = (self) => {
        self.img.src = "./img/vieux_120px.png";
        window.mainDiv.appendChild(this.img);
        self.img.style.position = 'absolute';
        self.img.style.bottom = '40px';
    }

    this.move = () => {

    }
}
