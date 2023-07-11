let prompt = require("prompt-sync")();


//Listar nome
/* let name = prompt("Informe seu nome: ");
console.log(`Olá, ${name}!`); */

//Verifica se um numero é maior ou menor que 10 
/* let num = prompt("Digite um numero: ");
if (num > 10) {
    console.log(`${num} é maior que 10`)
} else if(num == 10){
      console.log(`${num} é igual a 10`)
} else {
    console.log(`${num} é menor que 10`)
}*/


//Verifica se a letra é A, B ou C
/* let letra = prompt("Digite uma letra: ");

switch (letra) {
    case "a":
        console.log(`letra: ${letra}`);
        break;
    case "b":
        console.log(`letra: ${letra}`);
        break;
    case "c":
        console.log(`letra: ${letra}`);
        break;
    default:
        console.log(`letra: Não existe`);
        break;
} */

//Somar números
let primeiro_num = prompt("Digite um numero: ");
let segundo_num = prompt("Digite outro numero: ");
let soma = parseInt(primeiro_num) + parseInt(segundo_num);
console.log(`Soma é igual a ${soma}`);