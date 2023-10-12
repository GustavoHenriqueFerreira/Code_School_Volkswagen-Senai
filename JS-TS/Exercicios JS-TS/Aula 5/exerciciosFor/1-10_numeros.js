/* Imprimir números de 1 a 10 utilizando o loop for */
/* for (let i = 1; i <= 10; i++) {
   console.log(i);
} */

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
export default function imprimirNumeros(primeiroNumero, ultimoNumero) {
   for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      console.log(i);
   }
}