import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function imprimirNumerosWhile() {
    let contador: number = 0
    while (contador <= 20) {
        if (contador % 2 == 0) {
            console.log(contador)
        }
        contador++;
    }
}