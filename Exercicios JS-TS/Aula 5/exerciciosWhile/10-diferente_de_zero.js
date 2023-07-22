import PromptSync from "prompt-sync";
const prompt = PromptSync();
/* Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0. */
/* let numero = parseInt(prompt("Digite um número: "));
while (numero != 0) {
    console.log("Você errou o número, por favor tente novamente!");
    numero = parseInt(prompt("Digite outro número: "));
}
console.log("Você acertou o número"); */

export default function acertarNumero() {
    let numero = parseInt(prompt("Digite um número: "));
    while (numero != 0) {
        console.log("Você errou o número, por favor tente novamente!");
        numero = parseInt(prompt("Digite outro número: "));
    }
    console.log("Você acertou o número, parabéns você ganhou uma coca!");
}