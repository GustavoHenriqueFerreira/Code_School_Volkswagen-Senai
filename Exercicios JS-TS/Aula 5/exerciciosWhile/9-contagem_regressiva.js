import PromptSync from "prompt-sync";
const prompt = PromptSync();
/* Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */
/* let numero = parseInt(prompt("Digite um número: "));
while (numero >= 0) {
    console.log(numero);
    numero--;
} */

export default function contagemRegressiva() {
    let numero = parseInt(prompt("Digite um número: "));
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}