import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10. */
/* let numeroTabuada = parseInt(prompt("Digite um número para listar sua tabuada: "));
for (let i = 1; i <= 10; i++) {
    let valorTabuada = numeroTabuada * i;
    console.log(valorTabuada); 
} */

export function tabuada() {
    let numeroTabuada = parseInt(prompt("Digite um número para listar sua tabuada: "));
    for (let i = 1; i <= 10; i++) {
        let valorTabuada = numeroTabuada * i;
        console.log(valorTabuada);
    }
}