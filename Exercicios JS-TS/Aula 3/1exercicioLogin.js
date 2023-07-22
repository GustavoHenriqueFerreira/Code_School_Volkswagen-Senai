/* Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
nome de usuário é admin ; e a senha é senha123. Exiba uma mensagem indicando se o login
foi bem-sucedido ou não. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt("Digite seu nome: ");
var senha = prompt("Digite sua senha: ");
function login(nome, senha) {
    
    if(nome === "admin" && senha === "senha123"){
        console.log("Login bem sucedido");
    } else {
        console.log("Senha ou usuário incorreto");
    }
}