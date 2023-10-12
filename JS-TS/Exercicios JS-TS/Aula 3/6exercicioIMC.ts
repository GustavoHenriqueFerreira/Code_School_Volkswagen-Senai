import PromptSync from "prompt-sync";
const prompt = PromptSync();

export default function IMC(peso: number, altura: number) {
    let imc: number = Math.round((peso / (altura * altura)) * 100) / 100

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