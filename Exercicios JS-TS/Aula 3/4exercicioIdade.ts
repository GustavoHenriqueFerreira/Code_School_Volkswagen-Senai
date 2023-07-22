import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ano = parseInt(prompt("Digite seu ano de nascimento: "));
function verificarIdade(ano:number) {
    let idade = new Date().getFullYear() - ano;
    if (idade >= 18) {
        return console.log(`Você é maior de idade e possui ${idade}`);
    } else {
        return console.log(`Você é menor de idade e possui ${idade}`);
    }
}