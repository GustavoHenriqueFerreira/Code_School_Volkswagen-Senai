import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function verificarIdade(idade: number, nome: string) {
    let pessoa: { nome: string, idade: number} = {
        nome: nome,
        idade: idade,
    }

    while (pessoa.idade < 18) {
        console.log(`${pessoa.nome} é menor de idade ainda, vai come terra!`);
        pessoa.idade = parseInt(prompt("Digite sua idade novamente: "));
    }
    return console.log(`${pessoa.nome} já é maior de idade, chegou o momento de paga boleto!`);
}