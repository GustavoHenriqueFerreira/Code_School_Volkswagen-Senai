import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function imprimirNumerosImpares(primeiroNumero: number, ultimoNumero: number) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 1){
            console.log(i);
        }
    }
}