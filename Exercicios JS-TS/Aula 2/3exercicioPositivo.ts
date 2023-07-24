/* Faça um programa que receba um número inteiro do usuário e informe
se este número é positivo ou negativo. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var numero: number = parseInt(prompt("Digite um número: "));
function positivoOuNegativo(numero: number) {
    if(numero > 0){
        console.log(`O ${numero} é positivo`);
    } else if (numero === 0) {
        console.log(`O ${numero} é neutro`);
    } 
    else {
        console.log(`O ${numero} é negativo`);
    }
}

positivoOuNegativo(numero);