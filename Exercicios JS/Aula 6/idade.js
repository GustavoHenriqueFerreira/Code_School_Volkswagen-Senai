import PromptSync from "prompt-sync";

const prompt = PromptSync();
export function verificarIdade() {
    let pessoa = {
        nome: "",
        idade: 0,
    }

    pessoa.idade = parseInt(prompt("Digite sua idade: "));
    pessoa.nome = (prompt("Digite seu nome: "));
    while (pessoa.idade < 18) {
        console.log(`${pessoa.nome} é menor de idade ainda, vai come terra!`);
        pessoa.idade = parseInt(prompt("Digite sua idade novamente: "));
    }
    console.log(`${pessoa.nome} já é maior de idade, chegou o momento de paga boleto!`);
}