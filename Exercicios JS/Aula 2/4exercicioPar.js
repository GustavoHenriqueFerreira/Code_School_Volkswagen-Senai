/* Faça um programa que receba um número do usuário e informe
se este número é par ou ímpar. */

let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero: "));
if (numero%2 === 0) {
    console.log("O numero é par!");
} else {
    console.log("O numero é ímpar!");
}