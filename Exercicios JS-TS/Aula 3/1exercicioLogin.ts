import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome: string = prompt("Digite seu nome: ");
var senha: string = prompt("Digite sua senha: ");
function login(nome: string, senha: string) {
    if(nome === "admin" && senha === "senha123"){
        return console.log("Login bem sucedido");
    } else {
        return console.log("Senha ou usuário incorreto");
    }
}