import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* Imprimir números de 1 a 10 utilizando o loop for */
/* for (let i = 1; i <= 10; i++) {
   console.log(i);
} */

export function imprimirNumeros() {
   let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
   let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
   for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      console.log(i);
   }
}