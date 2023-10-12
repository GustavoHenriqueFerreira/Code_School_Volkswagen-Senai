/* Faça um programa receba dois valores e imprima qual é o maior
número digitado. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let primeiroNumero: number = parseInt(prompt("Digite um numero: "));
let segundoNumero: number = parseInt(prompt("Digite um numero: "));

function numeroMaior(primeiroNumero: number, segundoNumero: number) {
    if (primeiroNumero > segundoNumero) {
        console.log(`${primeiroNumero} é maior que ${segundoNumero}`);
    } else if(primeiroNumero === segundoNumero){
        console.log("Os dois números são iguais")
    } else {
        console.log(`${segundoNumero} é maior que ${primeiroNumero}`);
    }
}

numeroMaior(primeiroNumero, segundoNumero);