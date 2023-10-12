import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function contagemRegressiva(numero: number) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}