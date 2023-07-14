let prompt = require("prompt-sync")();
let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

let imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.5) {
    console.log(`O seu imc é ${imc}, você está abaixo do peso`);
}
else if (imc >= 18.5 && imc < 25) {
    console.log(`O seu imc é ${imc}, você tem um peso normal`);
}
else if (imc >= 25 && imc < 30) {
    console.log(`O seu imc é ${imc}, você está sobrepeso`);
}
else if (imc >= 30 && imc < 35) {
    console.log(`O seu imc é ${imc}, você tem obesidade grau 1`);
}
else if (imc >= 35 && imc < 40) {
    console.log(`O seu imc é ${imc}, você está obesidade grau 2`);
}
else {
    console.log(`O seu imc é ${imc}, você está obesidade grau 3`);
}