/* Imprimir números pares de 1 a 10. */
/* for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
} */

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
export default function imprimirNumerosPares(primeiroNumero, ultimoNumero) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }    
}