"use strict"

let score = 0;
let age = 80;

let y_sol = 0;

var mainDiv = document.getElementById('mainDiv');

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

window.addEventListener('clock', () => {
    console.log('ping');
    // 1/50 chance de créer un vieux toutes le 100ms
    let rand = getRandomInt(1);
    if(rand === 0) {
        // Arret de l'horloge
        clock.swOff(clock);


        // création du vieux
        let elder = new Elder();
        // affichage du vieux
        elder.show(elder);
    }
});