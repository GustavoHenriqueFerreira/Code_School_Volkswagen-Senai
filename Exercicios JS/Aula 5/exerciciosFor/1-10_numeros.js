let prompt = require("prompt-sync")();

/* Imprimir números de 1 a 10 utilizando o loop for */
/* for (let i = 1; i <= 10; i++) {
   console.log(i);
} */

function imprimirNumeros(primeiroNumero, ultimoNumero) {
   for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      console.log(i);
   }
}

let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
imprimirNumeros(primeiroNumero, ultimoNumero);