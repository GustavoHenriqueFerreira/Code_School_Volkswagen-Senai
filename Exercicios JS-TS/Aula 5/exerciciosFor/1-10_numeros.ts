import PromptSync from "prompt-sync";
const prompt = PromptSync();
let primeiroNumero: number = parseInt(prompt("Digite o primeiro número que será imprimido: "));
let ultimoNumero: number = parseInt(prompt("Digite o último número que será imprimido: "));
export default function imprimirNumeros(primeiroNumero: number, ultimoNumero: number) {
   for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      console.log(i);
   }
}