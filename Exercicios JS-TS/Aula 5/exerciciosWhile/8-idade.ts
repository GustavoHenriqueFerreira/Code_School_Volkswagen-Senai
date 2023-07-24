import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function verificarIdade(idade: number) {
    while (idade < 18) {
        console.log("Você é menor de idade ainda, vai come terra!");
        idade = parseInt(prompt("Digite sua idade novamente: "));
    }
    return console.log("Você já é maior de idade, chegou o momento de paga boleto!");
}