console.log('JS OK!');

///////////////////////////////// Palindroma

// Chiedere all’utente di inserire una parola

const word = prompt('Scrivi una parola');

const isPalindroma = checkPalindroma(word);

console.log('è palindroma:', isPalindroma)

// funzione per capire se la parola inserita è palindroma

// ciclo i caratteri in ordine e aggiungo il carattere in testa a reversedText
function checkPalindroma(text) {
    // NB: palindroma = la parola è sempre la stessa sia che sia letta da sx a dx cghe da dx a sx
    let reversedText = '';
    // ciclo i caratteri di text
    console.log('checkPalindroma');

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        // aggiungo a una stringa vuota i caratteri in ordine invertito
        reversedText = char + reversedText; // aggiunto in testa , reversedText = reversedText + char
        console.log(reversedText);
    }

    console.log('reversedText', reversedText);
    // controllo se il testo risultante è uguale a quello di input
    const isEqual = reversedText === text;
    // ritorno true se palindroma altrimenti false
    return isEqual;

}

function reverseString(textToReverse) {

    const result = textToReverse.split('').reverse().join('');


    return result;
}


//////////////////////////////////////////// Pari e Dispari

// chiedo di scegliere pari o dispari

let userChoice = '';

while (userChoice !== 'pari' && userChoice !== 'dispari') { // per ciclare deve essere true
    userChoice = prompt('Pari o dispari?');
    if (userChoice !== undefined) {
        userChoice = userChoice.toLowerCase();
    }
}

// chiedo all'utente un numero tra 1 e 5

let number = 0;

while (isNaN(number) || number < 1 || number > 5) {
    number = parseInt(prompt('dammi un numero tra 1 e 5'));
}


// generiamo un numero random 
const numberPC = getRandomNumber(1, 5);

// sommiamo i 2 numeri

const sum = number + numberPC;


// verifichiamo se la somma è pari o dispari
const pariODispari = isOddOrEven(sum) ? 'pari' : 'dispari';;


// dichiariamo chi ha vinto (userChoice è la scelta dell'utente)
if (userChoice === pariODispari) {
    console.log(userChoice, sum, 'hai vinto!');
} else {
    console.log(userChoice, sum, 'hai perso!');
}




function getRandomNumber(min, max) {
    const range = max - min + 1

    const random = Math.floor(Math.random() * range) + min;

    return random;

}

function isOddOrEven(numberToCheck) {
    return (numberToCheck % 2 === 0)
}

