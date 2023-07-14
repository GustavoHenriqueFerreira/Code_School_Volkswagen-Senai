let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
var senha = prompt("Digite sua senha: ");

if(nome === "admin" && senha === "senha123"){
    console.log("Login bem sucedido");
} else {
    console.log("Senha ou usuário incorreto");
}