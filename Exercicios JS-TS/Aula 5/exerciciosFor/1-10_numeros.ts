import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function imprimirNumeros(primeiroNumero: number, ultimoNumero: number) {
   for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      console.log(i);
   }
}