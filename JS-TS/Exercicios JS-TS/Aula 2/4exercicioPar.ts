/* Faça um programa que receba um número do usuário e informe
se este número é par ou ímpar. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero: number = parseInt(prompt("Digite um numero: "));
function parOuImpar(numero: number) {
    if (numero%2 === 0) {
        console.log("O numero é par!");
    } else {
        console.log("O numero é ímpar!");
    }
}

parOuImpar(numero);