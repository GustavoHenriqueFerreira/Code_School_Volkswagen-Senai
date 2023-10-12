/* Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let ano = parseInt(prompt("Digite seu ano de nascimento: "));
function verificarIdade(ano) {
    let idade = new Date().getFullYear() - ano;
    if (idade >= 18) {
        console.log(`Você é maior de idade e possui ${idade}`);
    } else {
        console.log(`Você é menor de idade e possui ${idade}`);
    }
}