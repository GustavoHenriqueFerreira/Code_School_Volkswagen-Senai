let prompt = require("prompt-sync")();

/* Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10. */
/* let numeroTabuada = parseInt(prompt("Digite um número para listar sua tabuada: "));
for (let i = 1; i <= 10; i++) {
    let valorTabuada = numeroTabuada * i;
    console.log(valorTabuada); 
} */

let numeroTabuada = parseInt(prompt("Digite um número para listar sua tabuada: "));
function tabuada(numeroEscolhido) {
    for (let i = 1; i <= 10; i++) {
        let valorTabuada = numeroEscolhido * i;
        console.log(valorTabuada);
    }
}
tabuada(numeroTabuada);