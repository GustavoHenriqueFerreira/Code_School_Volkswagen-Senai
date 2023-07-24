/* Faça um programa que receba 4 notas de um aluno, calcule e
imprima a média aritmética das notas e a mensagem de APROVADO
para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let primeiraNota: number = parseInt(prompt("Digite a primeira nota: "));
let segundaNota: number = parseInt(prompt("Digite segunda nota: "));
let terceiraNota: number = parseInt(prompt("Digite a terceira nota: "));
let quartaNota: number = parseInt(prompt("Digite a última nota: "));

function media4notas(primeiraNota: number, segundaNota: number, terceiraNota: number, quartaNota: number) {
    let media: number = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    if (media >= 7) {
        console.log(`Você foi aprovado, sua média é ${media}`);
    } else if(media < 7 && media >= 5){
        console.log(`Você está de recuperação, sua média é ${media}`);
    } else {
        console.log(`Você foi reprovado, sua média é ${media}`)
    }
}

media4notas(primeiraNota, segundaNota, terceiraNota, quartaNota);