console.log('JS OK')

//scegliere numero pari o dispari

let number = parseInt(prompt('Inserisci numero:'));

let numberOdd = 'pari'
let numberEven = 'dispari'

function OddEven(number) {
    return (number % 2 === 0) ? 'pari' : 'dispari';
}
console.log(OddEven(number));

//inserire numero da 1 a 5
//generare n random 1/5 usando funzione
//somma dei numeri pari o dispari
