import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* Imprimir números pares de 1 a 10. */
/* for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
} */

export function imprimirNumerosPares() {
    let primeiroNumero = parseInt(prompt("Digite o primeiro número que será imprimido: "));
    let ultimoNumero = parseInt(prompt("Digite o último número que será imprimido: "));
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }    
}
