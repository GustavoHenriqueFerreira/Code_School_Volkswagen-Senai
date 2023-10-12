import PromptSync from "prompt-sync";
const prompt = PromptSync();
/* Faça um programa que receba a idade do usuário, enquanto a
resposta do usuário for menor que 18 anos continue a solicitar a
idade e mostre uma mensagem quando a idade do usuário for
maior que 18. */
/* let idade = parseInt(prompt("Digite sua idade: "));
while (idade < 18) {
    console.log("Você é menor de idade ainda, vai come terra!");
    idade = parseInt(prompt("Digite sua idade novamente: "));
}
console.log("Você já é maior de idade, chegou o momento de paga boleto!"); */

export default function verificarIdade(idade) {
    while (idade < 18) {
        console.log("Você é menor de idade ainda, vai come terra!");
        idade = parseInt(prompt("Digite sua idade novamente: "));
    }
    console.log("Você já é maior de idade, chegou o momento de paga boleto!");
}