/* Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
2 representa terça-feira e assim por diante. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();
/* let numero = parseInt(prompt("Digite um número: "));

let diasSemana = {
    1: "Segunda",
    2: "Terca",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sabado",
    7: "Domingo",
}

console.log(`O dia é ${diasSemana[numero]}`); */

let numero = parseInt(prompt("Digite um número: "));
export default function diaSemana(numero) {

    let diasSemana = {
        1: "Segunda",
        2: "Terca",
        3: "Quarta",
        4: "Quinta",
        5: "Sexta",
        6: "Sabado",
        7: "Domingo",
    }

    console.log(`O dia é ${diasSemana[numero]}`);
}