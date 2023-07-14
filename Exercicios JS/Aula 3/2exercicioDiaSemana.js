let prompt = require("prompt-sync")();
let numero = parseInt(prompt("Digite um número: "));

let diasSemana = {
    1: "Segunda",
    2: "Terca",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sabado",
    7: "Domingo",
}

console.log(`O dia é ${diasSemana[numero]}`);