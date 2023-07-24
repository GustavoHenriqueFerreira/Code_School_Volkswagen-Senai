import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function PA(primeiroTermo: number, ultimoTermo: number) {
    let contador = primeiroTermo;
    let soma = 0;
    while (contador <= ultimoTermo) {
        soma = contador + soma;
        contador++;
    }
    return console.log(soma);
}