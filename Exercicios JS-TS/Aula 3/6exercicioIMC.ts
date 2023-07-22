export default function IMC(peso : number, altura : number) {
    let imc: number = Math.round((peso / (altura * altura)) * 100) / 100

    if (imc < 18.5) {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
    else if (imc >= 18.5 && imc < 25) {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
    else if (imc >= 25 && imc < 30) {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
    else if (imc >= 30 && imc < 35) {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
    else if (imc >= 35 && imc < 40) {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
    else {
        return console.log(`O seu imc é `+ imc + `, você está sobrepeso`);
    }
}