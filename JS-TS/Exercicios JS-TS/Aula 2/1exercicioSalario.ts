/* Faça um programa que receba o nome, cargo e salário de um
funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
desse funcionário. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome: string = prompt("Digite seu nome: ");
let cargo: string = prompt("Digite seu cargo: ");
let salario: number = parseInt(prompt("Digite seu salário: "));

function salario1000(nome: string, cargo: string, salario: number) {
    if(salario < 1000){
        salario = (salario * 1.1);
    }
    
    return console.log(`Olá ${nome}, ${cargo}! seu salário é ${salario}`);
}

salario1000(nome, cargo, salario);