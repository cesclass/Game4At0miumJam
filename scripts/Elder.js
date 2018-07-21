"use strict";

function Elder() {

    /*  Attributs  */
    this.mainDiv = document.getElementById('mainDiv');
    console.log(this.mainDiv);
    this.img = this.mainDiv.createElement('img');

    /*  Methodes  */
    this.show = (self) => {
        self.img.src = "./img/vieux_120px.png";
        self.mainDiv.appendChild(this.img);
        self.img.style.position = 'absolute';
        self.img.style.bottom = '40px';
    }

    this.move = () => {

    }
}
