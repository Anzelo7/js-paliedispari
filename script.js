console.log('JS OK')

//scegliere numero pari o dispari

const EvenOdd = parseInt(prompt('Scegli pari o dispari:'));

let pari = 'pari'
let dispari = 'dispari'


if (pari) {
    document.getElementById('numberUtente').innerHTML = 'pari'
} else if (dispari) {
    document.getElementById('numberUtente').innerHTML = 'dispari'
} else {
    alert(promt("Inserisci pari o dispari"));
}


//inserire numero da 1 a 5

const utente = parseInt(prompt('Scegli numero da 1 a 5:'));

document.getElementById('numberUtente').innerHTML = utente

//computer sceglie random n da 1/5

let computer = Math.floor(Math.random() * 4) + 1;;

const numberPC = []

function addNumber(numberPC) {
    while (numberPC.length < 5)

        return numberPC = Math.floor(Math.random() * 4) + 1;;
}
console.log(addNumber(numberPC));
document.getElementById('numberPC').innerHTML = numberPC

//somma dei numeri pari o dispari
let sum = utente + numberPC
//winner

if (sum === pari) {
    return document.getElementById('numberUtente').innerHTML = 'Winner'
} else
    return document.getElementById('numberPC').innerHTML = 'Winner'