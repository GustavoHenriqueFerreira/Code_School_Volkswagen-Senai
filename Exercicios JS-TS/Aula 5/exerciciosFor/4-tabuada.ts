import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numeroTabuada: number = parseInt(prompt("Digite um número para listar sua tabuada: "));
export default function tabuada(numeroTabuada: number) {
    for (let i = 1; i <= 10; i++) {
        let valorTabuada = numeroTabuada * i;
        console.log(valorTabuada);
    }
}