let prompt = require("prompt-sync")();

let nomes = ["Alana", "Alexia", "Odirlei", "Thiago", "Samanta"];
//             0         1          2         3          4

/* nomes.forEach(element => {
    console.log(element)
});

nomes.forEach((element, i) => {
    console.log(element, i)
});

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
} */

/* const frutas = ["Pera", "Uva", "Maça", "Salada Mista"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i], i)
}

frutas.forEach(element => {
    console.log(element)
});

frutas.forEach((element, i) => {
    console.log(element, i)
}); */

/* let salario = 1000;
let contador = 0; 
while (salario < 5000) {
    contador++;
    salario += 100;
    console.log(`Seu salario aumentou em R$100, seu salário agora é ${salario}, tendo ${contador} aumentos`);
}  */

/* do {
    salario += 100;
    console.log(`Seu salario aumentou em R$100, seu salário agora é ${salario}`);
} while (salario < 5000) */

let fechar = false;
let numeroEscolhido;
let numeroCorreto = "5";

do {
    numeroEscolhido = prompt("Digite um número: ");
    if (numeroEscolhido == numeroCorreto) {
        fechar = true;
        console.log("Até Logo");
    } else {
        console.log("Tente novamente!");
    }
} while (fechar !== true)