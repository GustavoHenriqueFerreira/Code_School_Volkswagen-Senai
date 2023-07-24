import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome: string = prompt("Digite seu nome: ");
let salario: number = parseInt(prompt("Digite seu salário: "));

function salario500(nome: string, salario: number) {
    if(salario < 500){
        salario = salario * 1.3;
        return console.log(`Olá ${nome}! Seu novo salário é ${salario}`);
    } else {
        return console.log("Seu salário é maior que R$500, logo não terá direito ao aumento")
    }
}

salario500(nome, salario);