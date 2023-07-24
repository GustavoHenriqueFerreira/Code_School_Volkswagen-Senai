/* Uma empresa decide dar aumento de 30% aos funcionários cujo
salário é inferior a 500 reais. Escreva um programa que receba o
salário de um funcionário e imprima o valor do salário reajustado ou
uma mensagem caso o funcionário não tenha direito a aumento. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt("Digite seu nome: ");
var salario = parseInt(prompt("Digite seu salário: "));

function salario500(nome, salario) {
    if(salario < 500){
        salario = parseInt(salario * 1.3);
        return console.log(`Olá ${nome}! Seu novo salário é ${salario}`);
    } else {
        return console.log("Seu salário é maior que R$500, logo não terá direito ao aumento")
    }
}

salario500(nome, salario);