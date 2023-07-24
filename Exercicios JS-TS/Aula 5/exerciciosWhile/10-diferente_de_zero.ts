import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function acertarNumero(numero: number) {
    while (numero != 0) {
        console.log("Você errou o número, por favor tente novamente!");
        numero = parseInt(prompt("Digite outro número: "));
    }
    return console.log("Você acertou o número, parabéns você ganhou uma coca!");
}