/* Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
* altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
usuário se encontra, de acordo com a tabela a seguir:
IMC menor que 18.5: Abaixo do peso
IMC de 18.5 a 24.9: Peso normal

IMC de 25.0 a 29.9: Sobrepeso
IMC de 30.0 a 34.9: Obesidade grau 1
IMC de 35.0 a 39.9: Obesidade grau 2
IMC maior ou igual a 40.0: Obesidade grau 3 */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* let peso = parseFloat(prompt("Digite o seu peso: "));
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
} */

let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));
export default function IMC(peso, altura) {

    let imc = parseFloat(peso / (altura * altura)).toFixed(2)

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
}