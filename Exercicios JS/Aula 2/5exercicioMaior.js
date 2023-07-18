/* Faça um programa receba dois valores e imprima qual é o maior
número digitado. */

let prompt = require("prompt-sync")();

let primeiroNumero = parseInt(prompt("Digite um numero: "));
let segundoNumero = parseInt(prompt("Digite um numero: "));

if (primeiroNumero > segundoNumero) {
    console.log(`${primeiroNumero} é maior que ${segundoNumero}`);
} else if(primeiroNumero === segundoNumero){
    console.log("Os dois números são iguais")
} else {
    console.log(`${segundoNumero} é maior que ${primeiroNumero}`);
}