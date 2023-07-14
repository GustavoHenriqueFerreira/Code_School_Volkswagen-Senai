let prompt = require("prompt-sync")();
let ano = parseInt(prompt("Digite seu ano de nascimento: "));
let idade = new Date().getFullYear() - ano;
if (idade >= 18) {
    console.log(`Você é maior de idade e possui ${idade}`);
} else {
    console.log(`Você é menor de idade e possui ${idade}`);
}
