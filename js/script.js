
//generazione di 16 numeri causali non ripetuti
function rndNoRepeat(max, min, valueNumber) {
    var explosiveNumbers = [];
    while (explosiveNumbers.length < valueNumber) {
        var rnd = Math.floor(Math.random() * max) + min;
        if (!explosiveNumbers.includes(rnd)) {
            explosiveNumbers.push (rnd);
        }
    }
    return explosiveNumbers;
}

//funzione principale
function campoMinato(max) {


    //generazione di 16 numeri causali non ripetuti
    var explosiveNumbers = rndNoRepeat(max, 1, 16);
    console.log(explosiveNumbers);

    //inizializzo variabili
    var score = document.getElementById('score');
    var userNumber;
    var userNumbers = [];
    var result = 0;
    var winCondition = max - 16;

    //richiede un numero all'utente svolte le verifiche aumenta il punteggio o termina il gioco.
    while (userNumbers.length < winCondition) {
        userNumber = parseInt(prompt("inserisci un numero tra 1 a 100, diverso da quelli inseriti in precedenza"));
        console.log(userNumber);

        //verifico se il numero inserito rientra tra quelli "esplosivi"
        if (explosiveNumbers.includes(userNumber)) {
            console.log("Hai perso :( il tuo punteggio è di: " + result);
            document.getElementById('explosive').innerHTML += (" " + explosiveNumbers);
            score.innerHTML += (result);
            return

        //aggiungo un numero vincente al relativo array e aumento il punteggio di 1
        }else if (!userNumbers.includes(userNumber)) {
            userNumbers.push (userNumber);
            document.getElementById('numeriUtente').innerHTML += (" " + userNumber);
            result += 1;

        // chiedo all'utente di inserire un numero diverso perchè non sono accettati valori ripetuti
        }else {
            alert("Hai già inserito questo numero")
        }
    }
    console.log('Hai vinto');
    score.innerHTML += ("Hai vinto!!!");
}

//recupero l'id dei bottoni e richiamo la funzione con i valori corrispondenti
var diff0 = document.getElementById('button0');
var diff1 = document.getElementById('button1');
var diff2 = document.getElementById('button2');
diff0.addEventListener('click', function () {
    campoMinato(100);
})
diff1.addEventListener('click', function () {
    campoMinato(80);
})
diff2.addEventListener('click', function () {
    campoMinato(50);
})
