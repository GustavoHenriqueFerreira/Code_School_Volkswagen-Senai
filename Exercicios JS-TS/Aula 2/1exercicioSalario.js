/* Faça um programa que receba o nome, cargo e salário de um
funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
desse funcionário. */

let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let cargo = prompt("Digite seu cargo: ");
var salario = parseInt(prompt("Digite seu salário: "));

if(salario < 1000){
    salario = parseInt(salario * 1.1);
}

console.log(`Olá ${nome}, ${cargo}! seu salário é ${salario}`)