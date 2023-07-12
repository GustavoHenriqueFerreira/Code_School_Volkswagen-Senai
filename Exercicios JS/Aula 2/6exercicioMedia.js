let prompt = require("prompt-sync")();

let primeiraNota = parseInt(prompt("Digite a primeira nota: "));
let segundaNota = parseInt(prompt("Digite segunda nota: "));
let terceiraNota = parseInt(prompt("Digite a terceira nota: "));
let quartaNota = parseInt(prompt("Digite a última nota: "));

let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
if (media >= 7) {
    console.log(`Você foi aprovado, sua média é ${media}`);
} else if(media < 7 && media >= 5){
    console.log(`Você está de recuperação, sua média é ${media}`);
} else {
    console.log(`Você foi reprovado, sua média é ${media}`)
}