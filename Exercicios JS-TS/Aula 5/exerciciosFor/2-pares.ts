import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function imprimirNumerosPares(primeiroNumero: number, ultimoNumero: number) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }    
}