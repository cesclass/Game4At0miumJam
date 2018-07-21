let score = 0;
let age = 80;

let y_sol = 0;

mainDiv = document.getElementById('mainDiv');

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

mainDiv = addEventListener('clock', () => {
    // 1/50 chance de créer un vieux toutes le 100ms
    rand = getRandomInt(50);
    if(rand === 0) {
        // création du vieux
        elder = new Elder();
        // affichage du vieux
        elder.show(elder);


        // Arret de l'horloge
        clock.swOff(clock);
    }
});