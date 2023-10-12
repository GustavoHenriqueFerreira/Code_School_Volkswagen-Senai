import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function tabuada(numeroTabuada: number) {
    for (let i = 1; i <= 10; i++) {
        let valorTabuada = numeroTabuada * i;
        console.log(valorTabuada);
    }
}