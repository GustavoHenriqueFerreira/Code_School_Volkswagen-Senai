let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let cargo = prompt("Digite seu cargo: ");
var salario = parseInt(prompt("Digite seu salário: "));

if(salario < 1000){
    salario = parseInt(salario * 1.1);
}

console.log(`Olá ${nome}, ${cargo}! seu salário é ${salario}`)