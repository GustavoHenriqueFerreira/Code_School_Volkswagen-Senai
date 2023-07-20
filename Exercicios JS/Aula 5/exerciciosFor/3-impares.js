/* Faça um programa que imprima os números ímpares de 0 a 50; */
/* for (let i = 0; i <= 50; i++) {
    if (i % 2 === 1){
        console.log(i);
    }
} */

function imprimirNumerosImpares(primeiroNumero, ultimoNumero) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 1){
            console.log(i);
        }
    }
}

let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
imprimirNumerosImpares(primeiroNumero, ultimoNumero);